import { IsBoolean, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePageDto {
  @ApiProperty({ example: 'About Us' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'about-us' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: '<h1>About Our Church</h1>...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @ApiProperty({ example: 'About NNMKC', required: false })
  @IsString()
  @IsOptional()
  metaTitle?: string;

  @ApiProperty({
    example: 'Learn about our history and mission',
    required: false,
  })
  @IsString()
  @IsOptional()
  metaDesc?: string;
}
