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
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('Sermons')
@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new sermon (Admin only)' })
  create(@Body() createSermonDto: CreateSermonDto) {
    return this.sermonsService.create(createSermonDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all sermons (Public)' })
  findAll() {
    return this.sermonsService.findAll();
  }

  @Get('latest')
  @ApiOperation({ summary: 'Get the most recent sermon' })
  findLatest() {
    return this.sermonsService.findLatest();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific sermon by ID' })
  findOne(@Param('id') id: string) {
    return this.sermonsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a sermon (Admin only)' })
  update(@Param('id') id: string, @Body() updateSermonDto: UpdateSermonDto) {
    return this.sermonsService.update(id, updateSermonDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a sermon (Admin only)' })
  remove(@Param('id') id: string) {
    return this.sermonsService.remove(id);
  }
}
