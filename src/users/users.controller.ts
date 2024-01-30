import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Get(':id')
  async getUserById(@Param('id') userId): Promise<Users>{
    return this.usersService.getUser(userId)
  }

  @Post()
  async createUser(@Body() userData: CreateUserDto): Promise<Users>{
    return this.usersService.createUser(userData)
  }
}
