import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { Belt } from '../models/belt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  members: Member[] = [{id: 1, firstName: 'Aleksa', lastName: 'Mrakovic', age: 29, belt: Belt.Black},
    {id: 2, firstName: 'Pera', lastName: 'Mrakovic', age: 29, belt: Belt.Black},
    {id: 3, firstName: 'Mika', lastName: 'Mrakovic', age: 29, belt: Belt.Black}
  ];

  private membersSubject: BehaviorSubject<Member[]> = new BehaviorSubject([...this.members]);

 
  members$: Observable<Member[]> = this.membersSubject.asObservable();

  constructor() {}

 
  getMember(id: number): Member | undefined {
    return this.members.find((m) => m.id === id);
  }

  get currentMembers(): Member[] {
    return this.membersSubject.getValue();
  }

  addMember(newMember: Member) {
    const ids = this.members.map((m) => m.id);
    newMember.id = ids.length ? Math.max(...ids) + 1 : 1;

    this.members.push({ ...newMember });
    this.emitMembers();
  }

  
  editMember(editedMember: Member) {
    const index = this.members.findIndex((m) => m.id === editedMember.id);
    if (index !== -1) {
      this.members[index] = { ...editedMember };
      this.emitMembers();
    }
  }

  
  private emitMembers() {
    this.membersSubject.next([...this.members]); 
  }

  deleteMember(id: number) {
    this.members = this.members.filter(m => m.id !== id);
    this.emitMembers();
  }
  
}
