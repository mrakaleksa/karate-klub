import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Placement } from 'src/app/models/placement';
import { MembersService } from 'src/app/members/members.service';
import { AchievementsService } from '../achievements.service';
import { Achievement } from '../achievement.model';
import { Member } from 'src/app/members/member.model';
import { IonContent, IonTitle, IonHeader, IonInput, IonToolbar, IonItem } from "@ionic/angular/standalone";

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
    id: 0,
    memberId: 0,
    competition: '',
    placement: Placement.First
  };

  constructor(
    private modalCtrl: ModalController,
    private membersService: MembersService,
    private achievementsService: AchievementsService
  ) {
    this.membersService.members$
      .subscribe(members => this.members = members);
  }

  onSave() {
    this.achievementsService.addAchievement(this.achievement);
    this.modalCtrl.dismiss();
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}