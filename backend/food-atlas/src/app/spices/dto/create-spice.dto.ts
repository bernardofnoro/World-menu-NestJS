/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSpiceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  quantity: string;

  @IsNumber()
  measureId: number;

  @IsString()
  spicePic: string;
}
