import { PartialType } from '@nestjs/mapped-types';
import { CreateSpiceDto } from './create-spice.dto';

export class UpdateSpiceDto extends PartialType(CreateSpiceDto) {}
