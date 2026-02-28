import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersPageRoutingModule } from './members-routing.module';

import { MembersPage } from './members.page';
import { MemberElementComponent } from './member-element/member-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersPageRoutingModule
  ],
  declarations: [MembersPage, MemberElementComponent]
})
export class MembersPageModule {}
