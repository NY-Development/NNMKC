import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({
    example: 'Easter Sunday Service',
    description: 'Title of the event',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'easter-sunday-2025',
    description: 'URL-friendly identifier',
  })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiPropertyOptional({
    example: 'Join us for a special Easter celebration...',
    description: 'Detailed description of the event',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: '2025-04-20T09:00:00Z',
    description: 'Start date and time (ISO 8601)',
  })
  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @ApiPropertyOptional({
    example: '2025-04-20T12:00:00Z',
    description: 'End date and time (ISO 8601)',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({
    example: 'Main Sanctuary',
    description: 'Location of the event',
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/easter-flyer.jpg',
    description: 'URL to the event flyer or image',
  })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Whether to feature this event on the homepage',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;
}
