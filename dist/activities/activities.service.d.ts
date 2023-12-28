import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ActivitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createActivityDto: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        startTime: Date;
        endTime: Date;
        attendees: number;
        maxAttendees: number;
        createdAt: Date;
        updatedAt: Date;
        instructorId: string;
        instructorPayRate: number;
    }, unknown, never> & {}>;
    findAllWithStatus(): Promise<{
        data: {
            status: any;
            id: string;
            title: string;
            startTime: Date;
            endTime: Date;
            attendees: number;
            maxAttendees: number;
            createdAt: Date;
            updatedAt: Date;
            instructorId: string;
            instructorPayRate: number;
        }[];
        totalActivities: number;
        completedActivities: number;
        completionRate: number;
    }>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        startTime: Date;
        endTime: Date;
        attendees: number;
        maxAttendees: number;
        createdAt: Date;
        updatedAt: Date;
        instructorId: string;
        instructorPayRate: number;
    }, unknown, never> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        startTime: Date;
        endTime: Date;
        attendees: number;
        maxAttendees: number;
        createdAt: Date;
        updatedAt: Date;
        instructorId: string;
        instructorPayRate: number;
    }, unknown, never> & {}>;
    update(id: string, updateActivityDto: UpdateActivityDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        startTime: Date;
        endTime: Date;
        attendees: number;
        maxAttendees: number;
        createdAt: Date;
        updatedAt: Date;
        instructorId: string;
        instructorPayRate: number;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        startTime: Date;
        endTime: Date;
        attendees: number;
        maxAttendees: number;
        createdAt: Date;
        updatedAt: Date;
        instructorId: string;
        instructorPayRate: number;
    }, unknown, never> & {}>;
}
