import { Spice } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSpiceDto } from './dto/create-spice.dto';
import { UpdateSpiceDto } from './dto/update-spice.dto';

@Injectable()
export class SpicesService {
  constructor(private prisma: PrismaService) {}

  async create(createSpiceDto: CreateSpiceDto): Promise<Spice> {
    return await this.prisma.spice.create({
      data: { ...createSpiceDto },
    });
  }

  async findAll(): Promise<Spice[]> {
    return await this.prisma.spice.findMany();
  }

  async findOne(id: number): Promise<Spice> {
    return await this.prisma.spice.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateSpiceDto): Promise<Spice> {
    return await this.prisma.spice.update({
      data,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.spice.delete({ where: { id } });
  }
}
