import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MinistriesService } from './ministries.service';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

@ApiTags('Ministries')
@Controller('ministries')
export class MinistriesController {
  constructor(private readonly ministriesService: MinistriesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new ministry (Admin only)' })
  create(@Body() createMinistryDto: CreateMinistryDto) {
    return this.ministriesService.create(createMinistryDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all ministries (Public)' })
  findAll() {
    return this.ministriesService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a ministry by slug (e.g., "youth")' })
  findOne(@Param('slug') slug: string) {
    return this.ministriesService.findOne(slug);
  }

  @Patch(':slug')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a ministry (Admin only)' })
  update(
    @Param('slug') slug: string,
    @Body() updateMinistryDto: UpdateMinistryDto,
  ) {
    return this.ministriesService.update(slug, updateMinistryDto);
  }

  @Delete(':slug')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a ministry (Admin only)' })
  remove(@Param('slug') slug: string) {
    return this.ministriesService.remove(slug);
  }
}
