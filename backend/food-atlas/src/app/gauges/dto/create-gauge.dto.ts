import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGaugeDto {
  @IsNotEmpty()
  @IsString()
  gauge: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
