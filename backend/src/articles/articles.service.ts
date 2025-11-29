import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const existing = await this.prisma.article.findUnique({
      where: { slug: createArticleDto.slug },
    });
    if (existing) {
      throw new ConflictException(
        `Article with slug '${createArticleDto.slug}' already exists`,
      );
    }

    return this.prisma.article.create({
      data: createArticleDto,
    });
  }

  // Find all (Public) - can filter by category
  findAll(category?: string): Promise<Article[]> {
    const whereClause = category
      ? { category, isPublished: true }
      : { isPublished: true };

    return this.prisma.article.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Find all (Admin) - shows unpublished drafts too
  findAllAdmin(): Promise<Article[]> {
    return this.prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(slug: string): Promise<Article> {
    const article = await this.prisma.article.findUnique({
      where: { slug },
    });
    if (!article) {
      throw new NotFoundException(`Article '${slug}' not found`);
    }

    // Increment view count
    await this.prisma.article.update({
      where: { slug },
      data: { views: { increment: 1 } },
    });

    return article;
  }

  async update(
    slug: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    await this.findOne(slug); // Check existence
    return this.prisma.article.update({
      where: { slug },
      data: updateArticleDto,
    });
  }

  async remove(slug: string): Promise<Article> {
    await this.findOne(slug); // Check existence
    return this.prisma.article.delete({
      where: { slug },
    });
  }
}
