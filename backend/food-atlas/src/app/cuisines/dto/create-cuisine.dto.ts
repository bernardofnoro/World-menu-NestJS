import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCuisineDto {
  @IsNotEmpty()
  @IsString()
  country: string;

  @IsString()
  flagPic: string;
}
