import { Gauges } from '.prisma/client';
import { PrismaService } from '../../plugins/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGaugeDto } from './dto/create-gauge.dto';
import { UpdateGaugeDto } from './dto/update-gauge.dto';

@Injectable()
export class GaugesService {
  constructor(private prisma: PrismaService) {}

  async create(createGaugeDto: CreateGaugeDto): Promise<Gauges> {
    return await this.prisma.gauges.create({
      data: { ...createGaugeDto },
    });
  }

  async findAll(): Promise<Gauges[]> {
    return await this.prisma.gauges.findMany();
  }

  async findOne(id: number): Promise<Gauges> {
    return await this.prisma.gauges.findUnique({ where: { id } });
  }

  async update(id: number, updateGaugeDto: UpdateGaugeDto): Promise<Gauges> {
    return await this.prisma.gauges.update({
      data: { ...updateGaugeDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.gauges.delete({ where: { id } });
  }
}
