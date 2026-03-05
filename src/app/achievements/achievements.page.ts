import { Component, OnInit } from '@angular/core';
import { AchievementsService } from './achievements.service';
import { MembersService } from '../members/members.service';
import { Achievement } from './achievement.model';
import { Member } from '../members/member.model';
import { ModalController } from '@ionic/angular';
import { AchievementModalComponent } from './achievement-modal/achievement-modal.component';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
  standalone: false
})
export class AchievementsPage implements OnInit {

  achievements: Achievement[] = [];

  constructor(
    private achievementsService: AchievementsService,
    private membersService: MembersService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.achievementsService.achievements$
      .subscribe(data => this.achievements = data);

    this.achievementsService.fetchAchievements();
  }

  getMemberName(memberId: string): string {
    const member = this.membersService.getMember(memberId);
    return member ? `${member.firstName} ${member.lastName} (${member.belt} belt)` : 'Deleted member';
  }

  async onAddAchievement() {
    const modal = await this.modalCtrl.create({
      component: AchievementModalComponent
    });
    await modal.present();
  }
}