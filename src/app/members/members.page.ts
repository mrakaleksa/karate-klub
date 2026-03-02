import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { Belt } from '../models/belt';
import { MembersService } from './members.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: false
})
export class MembersPage implements OnInit {

  members: Member[];

  constructor(private membersService: MembersService) {
    this.members = membersService.members;
  }

  ngOnInit() {
  }

}
