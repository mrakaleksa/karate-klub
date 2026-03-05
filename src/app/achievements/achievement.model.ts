import { Placement } from '../models/placement';

export interface Achievement {
  id: string;
  memberId: string;
  memberName: string; 
  competition: string;
  placement: Placement;
}