import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ example: 'Living a Life of Purpose' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'living-a-life-of-purpose' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'In this devotional, we explore...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiPropertyOptional({ example: 'A short summary for the card view...' })
  @IsString()
  @IsOptional()
  excerpt?: string;

  @ApiPropertyOptional({ example: 'https://nnmkc.org/images/devotional.jpg' })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @ApiPropertyOptional({ example: 'Rev. Abraham' })
  @IsString()
  @IsOptional()
  author?: string;

  @ApiProperty({ example: 'Devotional' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiPropertyOptional({ example: ['faith', 'purpose'], type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @ApiPropertyOptional({ example: '2023-12-25T10:00:00Z' })
  @IsDateString()
  @IsOptional()
  publishedAt?: string;

  @ApiPropertyOptional({ example: 'SEO Title' })
  @IsString()
  @IsOptional()
  metaTitle?: string;

  @ApiPropertyOptional({ example: 'SEO Description' })
  @IsString()
  @IsOptional()
  metaDesc?: string;
}
