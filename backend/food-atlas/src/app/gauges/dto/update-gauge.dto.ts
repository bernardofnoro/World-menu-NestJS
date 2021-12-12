import { PartialType } from '@nestjs/mapped-types';
import { CreateGaugeDto } from './create-gauge.dto';

export class UpdateGaugeDto extends PartialType(CreateGaugeDto) {}
