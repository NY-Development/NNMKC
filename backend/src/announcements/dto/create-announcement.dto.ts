/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AnnouncementPriority } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAnnouncementDto {
  @ApiProperty({ example: 'Service Cancelled Due to Weather' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: 'Please join us on Zoom instead.' })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    enum: AnnouncementPriority,
    default: AnnouncementPriority.MEDIUM,
  })
  @IsOptional()
  @IsEnum(AnnouncementPriority)
  priority?: AnnouncementPriority;

  @ApiPropertyOptional({ example: '2023-12-25T09:00:00Z' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2023-12-26T00:00:00Z' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
