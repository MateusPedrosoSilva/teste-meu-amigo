import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaingsService } from './campaings.service';
import { Prisma } from '@prisma/client';

@Controller('campaings')
export class CampaingsController {
  constructor(private readonly campaingsService: CampaingsService) {}

  @Post()
  create(@Body() createCampaingDto: Prisma.CampaingCreateInput) {
    return this.campaingsService.create(createCampaingDto);
  }

  @Get()
  findAll() {
    return this.campaingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampaingDto: Prisma.CampaingUpdateInput) {
    return this.campaingsService.update(+id, updateCampaingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaingsService.remove(+id);
  }
}
