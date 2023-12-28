export declare class CreateActivityDto {
    title: string;
    startTime: Date;
    endTime: Date;
    instructorId: string;
    maxAttendees: number;
}
export declare class UpdateActivityDto {
    title?: string;
    startTime?: Date;
    endTime?: Date;
    instructorId?: string;
    maxAttendees?: number;
}
