import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ContributionsService {
  constructor(private readonly prismaService: DatabaseService) {}

  create(createContributionDto: Prisma.ContributionCreateInput) {
    return this.prismaService.contribution.create({
      data: createContributionDto,
    });
  }

  findAll() {
    return this.prismaService.contribution.findMany();
  }

  findOne(id: number) {
    return this.prismaService.contribution.findUnique({ where: { id } });
  }

  update(id: number, updateContributionDto: Prisma.ContributionUpdateInput) {
    return this.prismaService.contribution.update({
      where: { id },
      data: updateContributionDto,
    });
  }

  remove(id: number) {
    return this.prismaService.contribution.delete({ where: { id } });
  }
}
