import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    create(createActivityDto: CreateActivityDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    findAllWithStatus(date?: string): Promise<{
        data: {
            status: any;
            instructor: {
                name: string;
                role: import(".prisma/client").UserRole;
                id: string;
                payRate: number;
            };
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
