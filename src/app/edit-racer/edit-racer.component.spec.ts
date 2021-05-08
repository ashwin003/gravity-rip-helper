import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRacerComponent } from './edit-racer.component';

describe('EditRacerComponent', () => {
  let component: EditRacerComponent;
  let fixture: ComponentFixture<EditRacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
