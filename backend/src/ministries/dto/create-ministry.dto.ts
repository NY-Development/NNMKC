import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMinistryDto {
  @ApiProperty({ example: 'Youth Ministry' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'youth' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiPropertyOptional({ example: 'A vibrant community for teens...' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 'To empower the next generation...' })
  @IsString()
  @IsOptional()
  mission?: string;

  @ApiPropertyOptional({ example: 'To see every young person saved...' })
  @IsString()
  @IsOptional()
  vision?: string;

  @ApiPropertyOptional({ example: 'Integrity, Passion, Faith...' })
  @IsString()
  @IsOptional()
  values?: string;

  @ApiPropertyOptional({ example: 'Fridays at 6:00 PM' })
  @IsString()
  @IsOptional()
  meetingTime?: string;

  @ApiPropertyOptional({ example: 'Main Hall' })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiPropertyOptional({ example: 'Brother John' })
  @IsString()
  @IsOptional()
  leaderName?: string;

  @ApiPropertyOptional({ example: 'youth@nnmkc.org' })
  @IsString()
  @IsOptional()
  contactInfo?: string;

  @ApiPropertyOptional({ example: 'https://nnmkc.org/youth-banner.jpg' })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
