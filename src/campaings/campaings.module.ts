import { Module } from '@nestjs/common';
import { CampaingsService } from './campaings.service';
import { CampaingsController } from './campaings.controller';

@Module({
  controllers: [CampaingsController],
  providers: [CampaingsService],
})
export class CampaingsModule {}
