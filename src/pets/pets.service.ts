import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PetsService {
  constructor(private readonly prismaService: DatabaseService) {}

  create(createPetDto: Prisma.PetCreateInput) {
    return this.prismaService.pet.create({ data: createPetDto });
  }

  findAll() {
    return this.prismaService.pet.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.pet.findUnique({ where: { id } });
  }

  update(id: number, updatePetDto: Prisma.PetUpdateInput) {
    return this.prismaService.pet.update({ where: { id }, data: updatePetDto });
  }

  remove(id: number) {
    return this.prismaService.pet.delete({ where: { id } });
  }
}
