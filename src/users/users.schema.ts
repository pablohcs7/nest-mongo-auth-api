import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Users extends Document {
  @Prop({type: String, required: true })
  name: string;

  @Prop({type: String, required: true })
  email: string;

  @Prop({type: String, required: true })
  password: string;

  @Prop({type: String, required: true })
  phone: string;

  @Prop({type: Number, required: true })
  height: number;

  @Prop({type: Number, required: true })
  weight: number;

  @Prop({ type: Date,  required: true })
  dateOfBirth: Date;

  @Prop({ type: Boolean, required: true, default: true })
  isActive: boolean;

  @Prop({ type: Boolean, required: true, default: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(Users);
