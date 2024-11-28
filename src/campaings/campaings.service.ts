import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CampaingsService {
  constructor(private readonly prismaService: DatabaseService) {}

  create(createCampaingDto: Prisma.CampaingCreateInput) {
    return this.prismaService.campaing.create({ data: createCampaingDto });
  }

  findAll() {
    return this.prismaService.campaing.findMany({});
  }

  findOne(id: number) {
    return this.prismaService.campaing.findUnique({ where: { id } });
  }

  update(id: number, updateCampaingDto: Prisma.CampaingUpdateInput) {
    return this.prismaService.campaing.update({
      where: { id },
      data: updateCampaingDto,
    });
  }

  remove(id: number) {
    return this.prismaService.campaing.delete({ where: { id } });
  }
}
