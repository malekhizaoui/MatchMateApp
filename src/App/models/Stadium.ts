import { TimeSlot } from "./TimeSlot";
import { Field } from "./Field";
import { GameHistory } from "./GameHistory";
import { ImageStadium } from "./ImageStadium";

export interface Stadium {
  id: number;
  stadiumName: string;
  capacity: number; // optional
  price?: number; // optional
  numberOfCourts?: number; // optional
  numberOfHoops?: number; // optional
  imageURL?: string; // optional
  longitude?: string; // optional
  latitude?: string; // optional
  status?: string; // optional
  Region?: string; // optional
  isFree?: boolean; // optional
  isInDoor?: boolean; // optional
  hasLighting?: boolean; // optional
  hasShower?: boolean; // optional
  created_at: Date;
  updated_at: Date;
  timeSlots: TimeSlot[] ;
  gameHistories: GameHistory[];
  field: Field;
  stadiumImages: ImageStadium[];
}
