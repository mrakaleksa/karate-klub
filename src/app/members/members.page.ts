import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { Belt } from '../models/belt';
import { MembersService } from './members.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: false
})
export class MembersPage implements OnInit {

 members: Member[] = [];

  constructor(
    private router: Router,
    private membersService: MembersService
  ) {}

  ngOnInit() {
    
    this.membersService.members$.subscribe(members => {
      this.members = members;
    });

    this.membersService.fetchMembers();
  }

 
  onAddMember() {
    this.router.navigate(['/members/member-add']);
  }

  

}
