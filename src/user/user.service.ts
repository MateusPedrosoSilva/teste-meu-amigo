import { User } from './model/user.model';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getUser(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id: Number(id) } });
  }

  async createUser(data: User): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async updateUser(id: number, data: User): Promise<User> {
    return await this.prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }

  async deleteUser(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id: Number(id) } });
  }
}
