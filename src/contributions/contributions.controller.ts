import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { Prisma } from '@prisma/client';

@Controller('contributions')
export class ContributionsController {
  constructor(private readonly contributionsService: ContributionsService) {}

  @Post()
  create(@Body() createContributionDto: Prisma.ContributionCreateInput) {
    return this.contributionsService.create(createContributionDto);
  }

  @Get()
  findAll() {
    return this.contributionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contributionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContributionDto: Prisma.ContributionUpdateInput,
  ) {
    return this.contributionsService.update(+id, updateContributionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contributionsService.remove(+id);
  }
}
