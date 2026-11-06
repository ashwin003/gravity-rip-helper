import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RaceComponent } from './race.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

import { RacerComponent } from '../racer/racer.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('RaceComponent', () => {
  let component: RaceComponent;
  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        DragDropModule,
        MatCardModule,
        MatTooltipModule,
        MatBadgeModule,
        RaceComponent, RacerComponent, AvatarComponent
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

  it('should re-render a racer as retired after a double click', () => {
    expect(fixture.debugElement.queryAll(By.css('.is-dead')).length).toBe(0);

    // Retire the last racer: its position doesn't change, so only a new racer
    // object (not an in-place mutation) makes the OnPush RacerComponent re-render.
    const lastColumn = fixture.debugElement.queryAll(By.css('.list'))[3];
    lastColumn.query(By.css('.box')).triggerEventHandler('dblclick');
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.is-dead')).length).toBe(1);
  });

  it('should re-render a racer after the edit dialog is confirmed', () => {
    const racer = component.racers[0];
    const edited = { ...racer, avatar: 'assets/cry.png' };
    component.dialog = { open: () => ({ afterClosed: () => of(edited) }) } as unknown as MatDialog;

    component.editTriggered(racer);
    fixture.detectChanges();

    const avatar = fixture.debugElement.query(By.directive(AvatarComponent)).componentInstance as AvatarComponent;
    expect(avatar.src).toBe('assets/cry.png');
    expect(racer.avatar).toBe('');
  });

  it('should render the 5 racers in each', () => {
    const columns = fixture.debugElement.queryAll(By.css('.list'));
    columns.forEach((col) => {
      const boxes = col.queryAll(By.css('.box'));
      expect(boxes.length).toBe(5);
    });
  });
});
