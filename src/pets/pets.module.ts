import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [PetsController],
  providers: [PetsService, UsersService],
})
export class PetsModule {}
