import { Component, Input, OnInit } from '@angular/core';
import { Belt } from 'src/app/models/belt';
import { Member } from '../member.model';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-member-element',
  templateUrl: './member-element.component.html',
  styleUrls: ['./member-element.component.scss'],
  standalone: false
})
export class MemberElementComponent  implements OnInit {

  @Input() member!: Member;

  constructor(private membersService: MembersService) {}

  onDelete() {
    this.membersService.deleteMember(this.member.id);
  }
  ngOnInit() {}

}
