import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberAddPageRoutingModule } from './member-add-routing.module';

import { MemberAddPage } from './member-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberAddPageRoutingModule
  ],
  declarations: [MemberAddPage]
})
export class MemberAddPageModule {}
