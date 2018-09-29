import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPagerComponent } from './common-pager.component';

describe('CommonPagerComponent', () => {
  let component: CommonPagerComponent;
  let fixture: ComponentFixture<CommonPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
