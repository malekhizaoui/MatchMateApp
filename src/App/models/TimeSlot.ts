import { User } from "./User";
import { Stadium } from "./Stadium";

export interface TimeSlot {
  id: number;
  day: string;
  startTime: Date;
  endTime: Date;
  created_at: Date;
  updated_at: Date;
  team: User[];
  stadium: Stadium;
  qrCodeUrl:string  
}
