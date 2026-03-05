import { Component, OnInit } from '@angular/core';
import { Belt } from 'src/app/models/belt';
import { MembersService } from '../members.service';
import { NavController } from '@ionic/angular';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.page.html',
  styleUrls: ['./member-add.page.scss'],
  standalone: false
})
export class MemberAddPage implements OnInit {

  member: Member = {
    id: '', 
    firstName: '',
    lastName: '',
    age: 0,
    belt: Belt.White
  };

  belts = Object.values(Belt);

  constructor(
    private membersService: MembersService,
    private navCtrl: NavController
  ) {}

  onSave() {
    //const ids = this.membersService.currentMembers.map(m => m.id);
    //this.member.id = ids.length ? Math.max(...ids) + 1 : 1;
    this.membersService.addMember(this.member);
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
