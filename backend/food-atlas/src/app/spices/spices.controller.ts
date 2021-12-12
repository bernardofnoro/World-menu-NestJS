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
import { SpicesService } from './spices.service';
import { CreateSpiceDto } from './dto/create-spice.dto';
import { UpdateSpiceDto } from './dto/update-spice.dto';

@Controller('/api/v1/spices')
export class SpicesController {
  constructor(private readonly spicesService: SpicesService) {}

  @Post()
  create(@Body() createSpiceDto: CreateSpiceDto) {
    return this.spicesService.create(createSpiceDto);
  }

  @Get()
  findAll() {
    return this.spicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.spicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSpiceDto: UpdateSpiceDto,
  ) {
    return this.spicesService.update(+id, updateSpiceDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.spicesService.remove(+id);
  }
}
