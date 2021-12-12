import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GaugesService } from './gauges.service';
import { CreateGaugeDto } from './dto/create-gauge.dto';
import { UpdateGaugeDto } from './dto/update-gauge.dto';

@Controller('/api/v1/gauges')
export class GaugesController {
  constructor(private readonly gaugesService: GaugesService) {}

  @Post()
  create(@Body() createGaugeDto: CreateGaugeDto) {
    return this.gaugesService.create(createGaugeDto);
  }

  @Get()
  findAll() {
    return this.gaugesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gaugesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGaugeDto: UpdateGaugeDto,
  ) {
    return this.gaugesService.update(+id, updateGaugeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gaugesService.remove(+id);
  }
}
