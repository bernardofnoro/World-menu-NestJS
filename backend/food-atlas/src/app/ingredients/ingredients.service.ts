import { Ingredients } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredients> {
    return await this.prisma.ingredients.create({
      data: { ...createIngredientDto },
    });
  }

  async findAll(): Promise<Ingredients[]> {
    return await this.prisma.ingredients.findMany();
  }

  async findOne(id: number): Promise<Ingredients> {
    return await this.prisma.ingredients.findUnique({ where: { id } });
  }

  async update(
    id: number,
    UpdateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredients> {
    return await this.prisma.ingredients.update({
      data: { ...UpdateIngredientDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.ingredients.delete({ where: { id } });
  }
}
