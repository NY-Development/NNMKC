/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}

  create(createAnnouncementDto: CreateAnnouncementDto) {
    return this.prisma.announcement.create({
      data: createAnnouncementDto,
    });
  }

  // Admin: Get all announcements
  findAll() {
    return this.prisma.announcement.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Public: Get only active and valid announcements
  findAllActive() {
    const now = new Date();
    return this.prisma.announcement.findMany({
      where: {
        isActive: true,
        AND: [
          {
            OR: [{ startDate: null }, { startDate: { lte: now } }],
          },
          {
            OR: [{ endDate: null }, { endDate: { gte: now } }],
          },
        ],
      },
      orderBy: [
        { priority: 'desc' }, // HIGH first
        { createdAt: 'desc' }, // Then newest
      ],
    });
  }

  findOne(id: string) {
    return this.prisma.announcement.findUnique({
      where: { id },
    });
  }

  update(id: string, updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.prisma.announcement.update({
      where: { id },
      data: updateAnnouncementDto,
    });
  }

  remove(id: string) {
    return this.prisma.announcement.delete({
      where: { id },
    });
  }
}
