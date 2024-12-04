import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class PetsService {
  constructor(
    private readonly prismaService: DatabaseService,
    private readonly usersService: UsersService,
  ) {}

  async create(createPetDto: Prisma.PetCreateInput) {
    try {
      const petCreated = await this.prismaService.pet.create({
        data: createPetDto,
      });
      return petCreated;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('error creating pet');
    }
  }

  async findAll() {
    return await this.prismaService.pet.findMany({});
  }

  async findOne(id: number) {
    return await this.prismaService.pet.findUnique({ where: { id } });
  }

  async update(id: number, updatePetDto: Prisma.PetUpdateInput) {
    return await this.prismaService.pet.update({
      where: { id },
      data: updatePetDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.pet.delete({ where: { id } });
  }
}
