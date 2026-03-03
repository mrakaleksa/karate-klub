import { Placement } from '../models/placement';

export interface Achievement {
  id: number;
  memberId: number;
  competition: string;
  placement: Placement;
}