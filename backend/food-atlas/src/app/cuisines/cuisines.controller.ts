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
import { CuisinesService } from './cuisines.service';
import { CreateCuisineDto } from './dto/create-cuisine.dto';
import { UpdateCuisineDto } from './dto/update-cuisine.dto';

@Controller('/api/v1/cuisines')
export class CuisinesController {
  constructor(private readonly cuisinesService: CuisinesService) {}

  @Post()
  create(@Body() createCuisineDto: CreateCuisineDto) {
    return this.cuisinesService.create(createCuisineDto);
  }

  @Get()
  findAll() {
    return this.cuisinesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cuisinesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCuisineDto: UpdateCuisineDto,
  ) {
    return this.cuisinesService.update(+id, updateCuisineDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cuisinesService.remove(+id);
  }
}
