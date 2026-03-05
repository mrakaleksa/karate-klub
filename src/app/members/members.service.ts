import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {

  private baseUrl =
    'https://karate-klub-obilic-app-default-rtdb.europe-west1.firebasedatabase.app/members';

  private membersSubject = new BehaviorSubject<Member[]>([]);

  members$: Observable<Member[]> = this.membersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchMembers();
  }


  fetchMembers() {
  this.http.get<{ [key: string]: Member }>(`${this.baseUrl}.json`)
    .subscribe(data => {
      const members: Member[] = data
        ? Object.keys(data).map(key => {
            const { id, ...rest } = data[key]; 
            return { id: key, ...rest };       
          })
        : [];
      this.membersSubject.next(members);
    });
}


  addMember(member: Member) {
    this.http.post(`${this.baseUrl}.json`, member)
      .subscribe(() => this.fetchMembers());
  }

  getMember(id: string): Member | undefined {
    return this.membersSubject.value.find(m => m.id === id);
  }

  editMember(member: Member) {
    this.http.put(`${this.baseUrl}/${member.id}.json`, member)
      .subscribe(() => this.fetchMembers());
  }

  deleteMember(id: string) {
    this.http.delete(`${this.baseUrl}/${id}.json`)
      .subscribe(() => this.fetchMembers());
  }
}