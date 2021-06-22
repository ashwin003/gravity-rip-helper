import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AvatarSelectorComponent } from './avatar-selector.component';

describe('AvatarSelectorComponent', () => {
  let component: AvatarSelectorComponent;
  let fixture: ComponentFixture<AvatarSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the right values for available avatars', () => {
    const available_avatars = component.available_avatars;
    expect(available_avatars.length).toBe(18);
  });

  it('should not highlight the unselected avatar', () => {
    const selected = 'assets/Raymond.png';
    component.selected = selected;
    
    fixture.detectChanges();

    const selectedElements = fixture.debugElement.queryAll(By.css('figure:not(.selected) > img'));    
    const invalid = selectedElements.filter((elem) => elem.attributes['src'] === selected);

    expect(invalid.length).toBe(0);
  });
});
