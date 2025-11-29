import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const existing = await this.prisma.event.findUnique({
      where: { slug: createEventDto.slug },
    });
    if (existing) {
      throw new ConflictException(
        `Event with slug '${createEventDto.slug}' already exists`,
      );
    }

    return this.prisma.event.create({
      data: createEventDto,
    });
  }

  // Find all events, ordered by start date (nearest first)
  findAll(): Promise<Event[]> {
    return this.prisma.event.findMany({
      orderBy: { startDate: 'asc' },
    });
  }

  // Find only upcoming events
  findUpcoming(): Promise<Event[]> {
    const now = new Date();
    return this.prisma.event.findMany({
      where: {
        startDate: {
          gte: now,
        },
      },
      orderBy: { startDate: 'asc' },
    });
  }

  async findOne(slug: string): Promise<Event> {
    const event = await this.prisma.event.findUnique({
      where: { slug },
    });
    if (!event) {
      throw new NotFoundException(`Event with slug '${slug}' not found`);
    }
    return event;
  }

  async update(slug: string, updateEventDto: UpdateEventDto): Promise<Event> {
    await this.findOne(slug); // Check existence
    return this.prisma.event.update({
      where: { slug },
      data: updateEventDto,
    });
  }

  async remove(slug: string): Promise<Event> {
    await this.findOne(slug); // Check existence
    return this.prisma.event.delete({
      where: { slug },
    });
  }
}
