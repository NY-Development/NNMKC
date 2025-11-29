import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getStats() {
    const [
      totalSermons,
      totalArticles,
      totalEvents,
      totalStaff,
      totalMinistries,
      activeAnnouncements,
    ] = await Promise.all([
      this.prisma.sermon.count(),
      this.prisma.article.count(),
      this.prisma.event.count(),
      this.prisma.staff.count(),
      this.prisma.ministry.count(),
      this.prisma.announcement.count({
        where: {
          endDate: {
            gte: new Date(),
          },
        },
      }),
    ]);

    return {
      totalSermons,
      totalArticles,
      totalEvents,
      totalStaff,
      totalMinistries,
      activeAnnouncements,
    };
  }

  async getRecentActivity() {
    // Fetch last 3 items from key modules to show "What's New"
    const [recentSermons, recentArticles, upcomingEvents] = await Promise.all([
      this.prisma.sermon.findMany({
        take: 3,
        orderBy: { datePreached: 'desc' },
        select: { id: true, title: true, datePreached: true },
      }),
      this.prisma.article.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: { id: true, title: true, createdAt: true },
      }),
      this.prisma.event.findMany({
        take: 3,
        where: { startDate: { gte: new Date() } },
        orderBy: { startDate: 'asc' },
        select: { id: true, title: true, startDate: true },
      }),
    ]);

    return {
      recentSermons,
      recentArticles,
      upcomingEvents,
    };
  }
}
