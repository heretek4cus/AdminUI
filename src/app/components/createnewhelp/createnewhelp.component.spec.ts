import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewhelpComponent } from './createnewhelp.component';

describe('CreatenewhelpComponent', () => {
  let component: CreatenewhelpComponent;
  let fixture: ComponentFixture<CreatenewhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
