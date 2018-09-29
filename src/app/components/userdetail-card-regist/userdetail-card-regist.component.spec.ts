import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailCardRegistComponent } from './userdetail-card-regist.component';

describe('UserdetailCardRegistComponent', () => {
  let component: UserdetailCardRegistComponent;
  let fixture: ComponentFixture<UserdetailCardRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailCardRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailCardRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
