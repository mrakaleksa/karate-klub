import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { Belt } from '../models/belt';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: false
})
export class MembersPage implements OnInit {

  members: Member[] = [{id: 1, firstName: 'Aleksa', lastName: 'Mrakovic', age: 29, belt: Belt.Black},
    {id: 1, firstName: 'Aleksa', lastName: 'Mrakovic', age: 29, belt: Belt.Black},
    {id: 1, firstName: 'Aleksa', lastName: 'Mrakovic', age: 29, belt: Belt.Black}
  ];

  constructor() { }

  ngOnInit() {
  }

}
