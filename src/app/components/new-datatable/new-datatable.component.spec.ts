import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDatatableComponent } from './new-datatable.component';

describe('NewDatatableComponent', () => {
  let component: NewDatatableComponent;
  let fixture: ComponentFixture<NewDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
