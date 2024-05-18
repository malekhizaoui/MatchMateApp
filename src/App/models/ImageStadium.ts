import { Stadium } from "./Stadium";

export interface ImageStadium {
  id: number;
  designation?: string; // optional
  legende?: string; // optional
  imageURL?: string; // optional
  created_at: Date;
  updated_at: Date;
  stadium: Stadium;
}
