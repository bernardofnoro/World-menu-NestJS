import { Cuisine } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCuisineDto } from './dto/create-cuisine.dto';
import { UpdateCuisineDto } from './dto/update-cuisine.dto';

@Injectable()
export class CuisinesService {
  constructor(private prisma: PrismaService) {}

  async create(createCuisineDto: CreateCuisineDto): Promise<Cuisine> {
    return await this.prisma.cuisine.create({
      data: { ...createCuisineDto },
    });
  }

  async findAll(): Promise<Cuisine[]> {
    return await this.prisma.cuisine.findMany();
  }

  async findOne(id: number): Promise<Cuisine> {
    return await this.prisma.cuisine.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateCuisineDto: UpdateCuisineDto,
  ): Promise<Cuisine> {
    return await this.prisma.cuisine.update({
      data: { ...updateCuisineDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.cuisine.delete({ where: { id } });
  }
}
