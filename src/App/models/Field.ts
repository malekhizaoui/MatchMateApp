import { Stadium } from "./Stadium";

export interface Field {
  id: number;
  fieldName: string;
  imageURL: string;
  created_at: Date;
  updated_at: Date;
  stadiums: Stadium[];
}
