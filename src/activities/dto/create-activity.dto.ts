// create-activity.dto.ts
export class CreateActivityDto {
  title: string;
  startTime: Date;
  endTime: Date;
  instructorId: string;
  maxAttendees: number;
}

// update-activity.dto.ts
export class UpdateActivityDto {
  title?: string;
  startTime?: Date;
  endTime?: Date;
  instructorId?: string;
  maxAttendees?: number;
}
