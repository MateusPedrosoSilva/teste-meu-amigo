import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const mailExists = await this.findOneByEmail(createUserDto.email);
    if (mailExists) throw new ConflictException('this email is already in use');
    try {
      const user = await this.prismaService.user.create({
        data: createUserDto,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException('Error creating user', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    const users = await this.prismaService.user.findMany({});
    if (!users) throw new NotFoundException('users not found');
    return users;
  }

  async findOneById(id: number) {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`user with id ${id} was not found`);
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user)
      throw new NotFoundException(`user with email '${email}' was not found`);
    return user;
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    await this.findOneById(id);
    try {
      const userUpdated = await this.prismaService.user.update({
        where: { id },
        data: updateUserDto,
      });
      return userUpdated;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    await this.findOneById(id);
    try {
      const userDeleted = await this.prismaService.user.delete({
        where: { id },
      });
      return userDeleted;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('error deleting user');
    }
  }
}
