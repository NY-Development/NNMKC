import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@ApiTags('Admin Dashboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('stats')
  @ApiOperation({ summary: 'Get total counts for dashboard cards' })
  getStats() {
    return this.dashboardService.getStats();
  }

  @Get('recent-activity')
  @ApiOperation({ summary: 'Get recent content and upcoming events' })
  getRecentActivity() {
    return this.dashboardService.getRecentActivity();
  }
}
