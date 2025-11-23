import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Sermon } from '@prisma/client';

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

@Injectable()
export class SermonsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSermonDto: CreateSermonDto): Promise<Sermon> {
    return this.prisma.sermon.create({
      data: createSermonDto,
    });
  }

  findAll(): Promise<Sermon[]> {
    return this.prisma.sermon.findMany({
      orderBy: {
        datePreached: 'desc', // Show newest sermons first
      },
    });
  }

  async findLatest(): Promise<Sermon | null> {
    const sermon = await this.prisma.sermon.findFirst({
      orderBy: {
        datePreached: 'desc',
      },
    });
    return sermon;
  }

  async findOne(id: string): Promise<Sermon> {
    const sermon = await this.prisma.sermon.findUnique({
      where: { id },
    });
    if (!sermon) {
      throw new NotFoundException(`Sermon with ID ${id} not found`);
    }
    return sermon;
  }

  async update(id: string, updateSermonDto: UpdateSermonDto): Promise<Sermon> {
    // Check if exists first
    await this.findOne(id);
    return this.prisma.sermon.update({
      where: { id },
      data: updateSermonDto,
    });
  }

  async remove(id: string): Promise<Sermon> {
    // Check if exists first
    await this.findOne(id);

    return this.prisma.sermon.delete({
      where: { id },
    });
  }
}
