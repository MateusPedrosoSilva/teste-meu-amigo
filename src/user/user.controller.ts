import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { User } from './model/user.model';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.userService.getAllUsers();
    return response.status(200).json({
      status: 'OK!',
      message: 'Successfully fetch data!',
      result: result,
    });
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User | null> {
    return await this.userService.getUser(id);
  }

  @Post()
  async createUser(@Body() postData: User): Promise<User> {
    return await this.userService.createUser(postData);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateData: User,
  ): Promise<User> {
    return await this.userService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return await this.userService.deleteUser(id);
  }
}