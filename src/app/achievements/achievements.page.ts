import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AchievementModalComponent } from './achievement-modal/achievement-modal.component';
import { AchievementsService } from './achievements.service';
import { Achievement } from './achievement.model';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  standalone: false
})
export class AchievementsPage implements OnInit {

  achievements: Achievement[] = [];

  constructor(
    private modalCtrl: ModalController,
    private achievementsService: AchievementsService
  ) {}

  ngOnInit() {
    this.achievementsService.achievements$
      .subscribe(data => this.achievements = data);
  }

  async onAddAchievement() {
    const modal = await this.modalCtrl.create({
      component: AchievementModalComponent
    });

    await modal.present();
  }
}