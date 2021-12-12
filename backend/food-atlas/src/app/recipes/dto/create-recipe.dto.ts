import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  cuisineId: number;

  @IsNumber()
  history: string;

  @IsNotEmpty()
  @IsNumber()
  ingredientsId: number;

  @IsNotEmpty()
  @IsNumber()
  spiceId: number;

  @IsNotEmpty()
  @IsNumber()
  prepTime: string;

  @IsNotEmpty()
  @IsNumber()
  servings: number;

  @IsNumber()
  recipePic: string;
}
