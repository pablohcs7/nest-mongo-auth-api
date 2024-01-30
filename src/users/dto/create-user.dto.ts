import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, Min, Max, isNotEmpty, isString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber() // Validates phone number format
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(50)
  @Max(250)
  height: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(10)
  @Max(300)
  weight: number;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean;
}