import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from '@prisma/client';
@Injectable()
export class PagesService {
  constructor(private prisma: PrismaService) {}

  create(createPageDto: CreatePageDto): Promise<Page> {
    return this.prisma.page.create({
      data: createPageDto,
    });
  }

  findAll(): Promise<Page[]> {
    return this.prisma.page.findMany();
  }

  async findOne(slug: string): Promise<Page> {
    const page = await this.prisma.page.findUnique({
      where: { slug },
    });
    if (!page) {
      throw new NotFoundException(`Page with slug '${slug}' not found`);
    }
    return page;
  }

  update(id: string, updatePageDto: UpdatePageDto): Promise<Page> {
    return this.prisma.page.update({
      where: { id },
      data: updatePageDto,
    });
  }

  remove(id: string): Promise<Page> {
    return this.prisma.page.delete({
      where: { id },
    });
  }
}
