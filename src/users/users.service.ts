import { Injectable } from '@nestjs/common';
import { Users } from './users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async createUser(userData: CreateUserDto): Promise<Users> {
    try {
      const newUser = new this.userModel(userData);
      return await newUser.save();
    } catch (err) {
      console.log(err);
      return err
    }
  }

  async getUser(userId: string): Promise<Users> {
    try {
      const user = await this.userModel.findById(userId);
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
