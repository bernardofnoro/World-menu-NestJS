import { Recipe } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return await this.prisma.recipe.create({
      data: { ...createRecipeDto },
    });
  }

  async findAll(): Promise<Recipe[]> {
    return await this.prisma.recipe.findMany();
  }

  async findOne(id: number): Promise<Recipe> {
    return await this.prisma.recipe.findUnique({ where: { id } });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    return await this.prisma.recipe.update({
      data: { ...updateRecipeDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.recipe.delete({ where: { id } });
  }
}
