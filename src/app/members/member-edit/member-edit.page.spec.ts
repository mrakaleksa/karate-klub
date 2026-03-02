import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberEditPage } from './member-edit.page';

describe('MemberEditPage', () => {
  let component: MemberEditPage;
  let fixture: ComponentFixture<MemberEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
