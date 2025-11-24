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
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new event (Authenticated only)' })
  @ApiResponse({
    status: 201,
    description: 'The event has been successfully created.',
  })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all events (ordered by date)' })
  findAll() {
    return this.eventsService.findAll();
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Get only upcoming events' })
  findUpcoming() {
    return this.eventsService.findUpcoming();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a specific event by slug' })
  findOne(@Param('slug') slug: string) {
    return this.eventsService.findOne(slug);
  }

  @Patch(':slug')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an event (Authenticated only)' })
  update(@Param('slug') slug: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(slug, updateEventDto);
  }

  @Delete(':slug')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an event (Authenticated only)' })
  remove(@Param('slug') slug: string) {
    return this.eventsService.remove(slug);
  }
}
