import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, DatabaseModule, PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
