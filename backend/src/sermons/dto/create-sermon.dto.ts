import { IsNotEmpty, IsOptional, IsString, IsUrl, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSermonDto {
  @ApiProperty({ example: 'The Power of Faith' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Pastor John Doe' })
  @IsString()
  @IsNotEmpty()
  preacher: string;

  @ApiProperty({ example: 'https://youtube.com/watch?v=...' })
  @IsUrl()
  @IsNotEmpty()
  videoUrl: string;

  @ApiPropertyOptional({ example: 'https://mysite.com/thumbnail.jpg' })
  @IsUrl()
  @IsOptional()
  thumbnailUrl?: string;

  @ApiPropertyOptional({ example: 'A sermon about faith...' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: '2023-10-22T10:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  datePreached: string;

  @ApiPropertyOptional({ example: 'Summer of Psalms' })
  @IsString()
  @IsOptional()
  series?: string;
}
