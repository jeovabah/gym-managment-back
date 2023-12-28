"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ActivitiesService = class ActivitiesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createActivityDto) {
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
            }
            else if (now >= startTime && now <= endTime) {
                status = 'Em andamento';
            }
            else {
                status = 'Completo';
            }
            return Object.assign(Object.assign({}, activity), { status });
        });
        const totalActivities = activities.length;
        const completedActivities = activitiesWithStatus.filter((activity) => activity.status === 'Completo').length;
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
        return this.prisma.activity.findMany();
    }
    async findOne(id) {
        const activity = await this.prisma.activity.findUnique({ where: { id } });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID "${id}" not found`);
        }
        return activity;
    }
    async update(id, updateActivityDto) {
        const activity = await this.prisma.activity.findUnique({ where: { id } });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID "${id}" not found`);
        }
        return this.prisma.activity.update({
            where: { id },
            data: updateActivityDto,
        });
    }
    async remove(id) {
        const activity = await this.prisma.activity.findUnique({ where: { id } });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID "${id}" not found`);
        }
        return this.prisma.activity.delete({ where: { id } });
    }
};
ActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActivitiesService);
exports.ActivitiesService = ActivitiesService;
//# sourceMappingURL=activities.service.js.map