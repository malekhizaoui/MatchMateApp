import { TimeSlot } from "./TimeSlot";
import { GameHistory } from "./GameHistory";
import { Feedback } from "./Feedback";
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string; // optional
  age: number;
  hobbies?: string; // optional
  image?: string; // optional
  region?: string; // optional
  created_at: Date;
  updated_at: Date;
  is_verified: boolean;
  code_verification?: number; // optional
  timeSlots: TimeSlot[];
  gameHistories: GameHistory[];
  feedbacks:Feedback[]
}
