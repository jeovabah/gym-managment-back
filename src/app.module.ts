import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [UsersModule, ActivitiesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
