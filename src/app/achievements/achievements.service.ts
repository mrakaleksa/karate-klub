import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Achievement } from './achievement.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  private baseUrl = 'https://karate-klub-obilic-app-default-rtdb.europe-west1.firebasedatabase.app/achievements';
  private achievementsSubject = new BehaviorSubject<Achievement[]>([]);
  achievements$: Observable<Achievement[]> = this.achievementsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAchievements();
  }

  fetchAchievements() {
    this.http.get<{ [key: string]: Achievement }>(`${this.baseUrl}.json`)
      .subscribe(data => {
        const list: Achievement[] = data
          ? Object.keys(data).map(key => {
              const { id, ...rest } = data[key]; 
              return { id: key, ...rest };
            })
          : [];
        this.achievementsSubject.next(list);
      });
  }

  addAchievement(achievement: Achievement) {
    this.http.post<{ name: string }>(`${this.baseUrl}.json`, achievement)
      .subscribe(() => this.fetchAchievements());
  }

  deleteAchievement(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}.json`);
  }

}