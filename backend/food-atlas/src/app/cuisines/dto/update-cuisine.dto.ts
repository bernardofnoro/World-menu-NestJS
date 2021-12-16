import { PartialType } from '@nestjs/mapped-types';
import { CreateCuisineDto } from './create-cuisine.dto';

export class UpdateCuisineDto extends PartialType(CreateCuisineDto) {}
