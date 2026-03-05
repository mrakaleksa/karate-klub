import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Belt } from 'src/app/models/belt';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from '../members.service';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
  standalone: false
})
export class MemberEditPage implements OnInit {

  member!: Member;
  belts = Object.values(Belt);

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('memberId');

    if (!id) {
      throw new Error('No memberId in route');
    }

    this.membersService.members$
      .pipe(
        map((members: Member[]) =>
          members.find((m: Member) => m.id === id)
        )
      )
      .subscribe((member: Member | undefined) => {

        if (!member) {
          throw new Error('Member not found');
        }

        this.member = { ...member };
      });

  }

  onSave() {
    this.membersService.editMember(this.member);
    this.navCtrl.back();
  }

}
