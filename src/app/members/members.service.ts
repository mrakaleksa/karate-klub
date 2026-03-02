import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Belt } from '../models/belt';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  members: Member[] = [{id: 1, firstName: 'Aleksa', lastName: 'Mrakovic', age: 29, belt: Belt.Black},
    {id: 2, firstName: 'Pera', lastName: 'Mrakovic', age: 29, belt: Belt.Black},
    {id: 3, firstName: 'Mika', lastName: 'Mrakovic', age: 29, belt: Belt.Black}
  ];

  getMember(id: number): Member | undefined {

    return this.members.find((m)=>m.id===id);

  }

  updateMember(updatedMember: Member) {
    const index = this.members.findIndex(m => m.id === updatedMember.id);
    if (index !== -1) {
      this.members[index] = { ...updatedMember };
    }
  }

  getAllMembers() {
    return [...this.members];
  }
}
