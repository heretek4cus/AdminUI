import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdNavigationComponent } from './third-navigation.component';

describe('ThirdNavigationComponent', () => {
  let component: ThirdNavigationComponent;
  let fixture: ComponentFixture<ThirdNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
