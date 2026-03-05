import { Belt } from "../models/belt";

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  belt: Belt;
}