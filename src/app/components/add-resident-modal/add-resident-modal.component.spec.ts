import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidentModalComponent } from './add-resident-modal.component';

describe('AddResidentModalComponent', () => {
  let component: AddResidentModalComponent;
  let fixture: ComponentFixture<AddResidentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResidentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResidentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
