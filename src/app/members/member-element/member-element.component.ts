import { Component, Input, OnInit } from '@angular/core';
import { Belt } from 'src/app/models/belt';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-element',
  templateUrl: './member-element.component.html',
  styleUrls: ['./member-element.component.scss'],
  standalone: false
})
export class MemberElementComponent  implements OnInit {

  @Input() member: Member = {id: 1, firstName: 'Aleksa', lastName: 'Mrakovic', age: 29, belt: Belt.Black};

  constructor() { }

  ngOnInit() {}

}
