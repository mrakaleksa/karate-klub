import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Achievement } from './achievement.model';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  private achievements: Achievement[] = [];

  private achievementsSubject =
    new BehaviorSubject<Achievement[]>([]);

  achievements$: Observable<Achievement[]> =
    this.achievementsSubject.asObservable();

  constructor() {}

  addAchievement(newAchievement: Achievement) {
    const ids = this.achievements.map(a => a.id);
    newAchievement.id = ids.length ? Math.max(...ids) + 1 : 1;

    this.achievements.push({ ...newAchievement });
    this.emitAchievements();
  }

  private emitAchievements() {
    this.achievementsSubject.next([...this.achievements]);
  }
}
