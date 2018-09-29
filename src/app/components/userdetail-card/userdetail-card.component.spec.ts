import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailCard } from './userdetail-card.component';

describe('HomeComponent', () => {
  let component: UserDetailCard;
  let fixture: ComponentFixture<UserDetailCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });