import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  firstName: string = '';
  lastName: string = '';

  @ViewChildren('photo') photos!: QueryList<ElementRef>;

  loading!: HTMLIonLoadingElement;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) {}

  

  async ngOnInit() {

    this.loading = await this.loadingCtrl.create({
      message: 'Loading photos...',
      spinner: 'crescent'
    });

    await this.loading.present();

    console.log('User from localStorage:', this.authService.getCurrentUser());
    const user = this.authService.getCurrentUser();
    if (user) {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    }

    setTimeout(() => {
      this.loading?.dismiss();
    }, 3000);
    
  }

  ngAfterViewInit() {
    const images = this.photos.toArray();

    
    const allLoaded = images.every(img => img.nativeElement.complete);
    if (allLoaded) {
      this.loading?.dismiss();
      return;
    }

    
    images.forEach(img => {
      img.nativeElement.onload = () => {
        const loaded = images.every(i => i.nativeElement.complete);
        if (loaded) {
          this.loading?.dismiss();
        }
      };
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
