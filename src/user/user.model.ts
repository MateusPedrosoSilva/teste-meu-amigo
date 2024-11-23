import { Prisma } from "@prisma/client";

export class User implements Prisma.UserCreateInput{
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    pets?: Prisma.PetCreateNestedManyWithoutKeeperInput;
    
}