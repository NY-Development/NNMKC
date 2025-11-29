import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Ministry } from '@prisma/client';
@Injectable()
export class MinistriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMinistryDto: CreateMinistryDto): Promise<Ministry> {
    // Check for duplicate slug
    const existing = await this.prisma.ministry.findUnique({
      where: { slug: createMinistryDto.slug },
    });
    if (existing) {
      throw new ConflictException(
        `Ministry with slug '${createMinistryDto.slug}' already exists`,
      );
    }

    return this.prisma.ministry.create({
      data: createMinistryDto,
    });
  }

  findAll(): Promise<Ministry[]> {
    return this.prisma.ministry.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(slug: string): Promise<Ministry> {
    const ministry = await this.prisma.ministry.findUnique({
      where: { slug }, // We search by slug, not ID, for better URLs
    });
    if (!ministry) {
      throw new NotFoundException(`Ministry '${slug}' not found`);
    }
    return ministry;
  }

  async update(
    slug: string,
    updateMinistryDto: UpdateMinistryDto,
  ): Promise<Ministry> {
    await this.findOne(slug); // Ensure exists
    return this.prisma.ministry.update({
      where: { slug },
      data: updateMinistryDto,
    });
  }

  async remove(slug: string): Promise<Ministry> {
    await this.findOne(slug); // Ensure exists
    return this.prisma.ministry.delete({
      where: { slug },
    });
  }
}
