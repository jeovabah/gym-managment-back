import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  async create(createActivityDto: any) {
    return this.prisma.activity.create({
      data: {
        title: createActivityDto.title,
        startTime: createActivityDto.startTime,
        endTime: createActivityDto.endTime,
        maxAttendees: createActivityDto.maxAttendees,
        attendees: createActivityDto.attendees,
        instructorPayRate: createActivityDto.instructorPayRate,
        instructor: {
          connect: { id: createActivityDto.instructorId },
        },
      },
    });
  }

  async findAllWithStatus() {
    const activities = await this.prisma.activity.findMany();
    const now = new Date();

    const activitiesWithStatus = activities.map((activity) => {
      let status;
      const startTime = new Date(activity.startTime);
      const endTime = new Date(activity.endTime);

      if (now < startTime) {
        status = 'Pendente';
      } else if (now >= startTime && now <= endTime) {
        status = 'Em andamento';
      } else {
        status = 'Completo';
      }

      return {
        ...activity,
        status,
      };
    });

    const totalActivities = activities.length;
    const completedActivities = activitiesWithStatus.filter(
      (activity) => activity.status === 'Completo',
    ).length;
    const completionRate = totalActivities
      ? (completedActivities / totalActivities) * 100
      : 0;

    return {
      data: activitiesWithStatus,
      totalActivities,
      completedActivities,
      completionRate,
    };
  }

  async findAll() {
    // Implementação para buscar todas as atividades
    return this.prisma.activity.findMany();
  }

  async findOne(id: string) {
    // Implementação para buscar uma atividade específica
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity) {
      throw new NotFoundException(`Activity with ID "${id}" not found`);
    }
    return activity;
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    // Implementação para atualizar uma atividade
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity) {
      throw new NotFoundException(`Activity with ID "${id}" not found`);
    }
    return this.prisma.activity.update({
      where: { id },
      data: updateActivityDto,
    });
  }

  async remove(id: string) {
    // Implementação para remover uma atividade
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity) {
      throw new NotFoundException(`Activity with ID "${id}" not found`);
    }
    return this.prisma.activity.delete({ where: { id } });
  }
}
