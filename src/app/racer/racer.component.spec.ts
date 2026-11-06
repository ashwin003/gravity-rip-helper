import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RacerComponent } from './racer.component';
import { Racer } from '../models/racer';
import { AvatarComponent } from '../avatar/avatar.component';

describe('RacerComponent', () => {
  let component: RacerComponent;
  let fixture: ComponentFixture<RacerComponent>;
  const racer: Racer = { id: 0, name: 'John Smith', avatar: '', isAlive: true };
  const position: number = 1;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        MatBadgeModule,
        MatTooltipModule,
        RacerComponent, AvatarComponent
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerComponent);
    component = fixture.componentInstance;
    component.racer = racer;
    component.position = position;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include an avatar component', () => {
    const avatar = fixture.debugElement.query(By.css('.racer')).children[0].name;
    
    expect(avatar).toBe('app-avatar');
  });

  it('should emit the right value on trigerring edit via click', () => {
    const avatar = fixture.debugElement.query(By.css('.racer')).children[0].nativeElement;
    spyOn(component.editTriggered, 'emit');
    avatar.dispatchEvent(new Event('click'));
    expect(component.editTriggered.emit).toHaveBeenCalledWith(racer);
  });

  it('should specify the right position', () => {
    const badgeElement = fixture.debugElement.query(By.css('.racer')).attributes;
    const badgeContent = fixture.debugElement.query(By.css('.mat-badge-content')).nativeElement;

    expect(badgeContent.textContent.trim()).toBe(position.toString());
    expect(badgeElement['matBadgeColor']).toBe('accent');
    expect(badgeElement['matBadgePosition']).toBe('before');
  });
});
