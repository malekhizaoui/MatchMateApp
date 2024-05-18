import { User } from "./User";
import { Stadium } from "./Stadium";

export interface GameHistory {
  id: number;
  day: string;
  startTime: Date;
  endTime: Date;
  created_at: Date;
  updated_at: Date;
  team: User[];
  stadium: Stadium;
}
