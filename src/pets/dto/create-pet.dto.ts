import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePetDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  keeperId: number;

  @ApiProperty()
  keeper: Prisma.UserCreateNestedOneWithoutPetsInput;

  @ApiProperty({ required: false })
  age?: number;

  @ApiProperty({ required: false })
  reace?: string;
}
