import { Belt } from "../models/belt";

export interface Member {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    belt: Belt;

}
