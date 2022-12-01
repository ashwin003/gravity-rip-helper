import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RaceComponent } from './race.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatBadgeModule } from '@angular/material/badge';

import { RacerComponent } from '../racer/racer.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { By } from '@angular/platform-browser';

describe('RaceComponent', () => {
  let component: RaceComponent;
  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceComponent, RacerComponent, AvatarComponent ],
      imports: [
        DragDropModule,
        MatCardModule,
        MatTooltipModule,
        MatBadgeModule
      ],
      providers: [
        { provide: MatDialog, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate 20 random racers', () => {
    expect(component.racers.length).toBe(20);
  });

  it('should render the racers in 4 columns', () => {
    const columns = fixture.debugElement.queryAll(By.css('.list'));
    expect(columns.length).toBe(4);
  });

  it('should render the 5 racers in each', () => {
    const columns = fixture.debugElement.queryAll(By.css('.list'));
    columns.forEach((col) => {
      const boxes = col.queryAll(By.css('.box'));
      expect(boxes.length).toBe(5);
    });
  });
});
