import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Placement } from 'src/app/models/placement';
import { MembersService } from 'src/app/members/members.service';
import { AchievementsService } from '../achievements.service';
import { Achievement } from '../achievement.model';
import { Member } from 'src/app/members/member.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-achievement-modal',
  templateUrl: './achievement-modal.component.html',
  styleUrls: ['./achievement-modal.component.scss'],
  standalone: false
})
export class AchievementModalComponent {

  members: Member[] = [];
  placements = Object.values(Placement);

  achievement: Achievement = {
    id: '',
    memberId: '',
    memberName: '',
    competition: '',
    placement: Placement.First
  };

  constructor(
    private modalCtrl: ModalController,
    private membersService: MembersService,
    private achievementsService: AchievementsService
  ) {
    
    this.membersService.members$.subscribe(members => this.members = members);
  }

  onSave() {
    const member = this.members.find(m => m.id === this.achievement.memberId);
    if (member) {
      this.achievement.memberName = `${member.firstName} ${member.lastName}`;
    } else {
      this.achievement.memberName = 'Deleted member';
    }

    this.achievementsService.addAchievement(this.achievement);
    this.modalCtrl.dismiss();
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
