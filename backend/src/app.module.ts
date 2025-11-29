import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/pages.module';
import { SermonsModule } from './sermons/sermons.module';
import { StaffModule } from './staff/staff.module';
import { MinistriesModule } from './ministries/ministries.module';
import { ArticlesModule } from './articles/articles.module';
import { EventsModule } from './events/events.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    PagesModule,
    SermonsModule,
    StaffModule,
    MinistriesModule,
    ArticlesModule,
    EventsModule,
    AnnouncementsModule,
    DashboardModule,
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
