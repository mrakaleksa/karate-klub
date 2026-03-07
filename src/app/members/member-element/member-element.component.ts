import { Component, Input, OnInit } from '@angular/core';
import { Belt } from 'src/app/models/belt';
import { Member } from '../member.model';
import { MembersService } from '../members.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-member-element',
  templateUrl: './member-element.component.html',
  styleUrls: ['./member-element.component.scss'],
  standalone: false
})
export class MemberElementComponent  implements OnInit {

  @Input() member!: Member;

  constructor(private membersService: MembersService, private alertController: AlertController) {}

  async onDelete() {

    const alert = await this.alertController.create({
      header: 'Delete Member',
      message: `Delete ${this.member.firstName} ${this.member.lastName}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.membersService.deleteMember(this.member.id);
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {}

}
