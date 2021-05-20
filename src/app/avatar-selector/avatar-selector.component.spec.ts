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
    const invalid = available_avatars.filter((avatar) => !avatar.startsWith('assets/'));
    expect(invalid.length).toBe(0);
  });

  it('should highlight the selected avatar', () => {
    const selected = 'assets/Raymond.png';
    component.selected = selected;
    
    fixture.detectChanges();

    const selectedElement = fixture.debugElement.query(By.css('.selected > img'));
    const avatar = selectedElement.attributes['src'];

    expect(avatar).toBe(selected);
  });

  it('should not highlight the unselected avatar', () => {
    const selected = 'assets/Raymond.png';
    component.selected = selected;
    
    fixture.detectChanges();

    const selectedElements = fixture.debugElement.queryAll(By.css('figure:not(.selected) > img'));    
    const invalid = selectedElements.filter((elem) => elem.attributes['src'] === selected);

    expect(invalid.length).toBe(0);
  });

  it('should emit the right value on click', () => {
    const selected = 'assets/Raymond.png';
    spyOn(component.avatarSelected, 'emit');

    const figure = fixture.debugElement.query(By.css('[src="' + selected + '"]')).parent;
    figure?.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.avatarSelected.emit).toHaveBeenCalledWith(selected);
  });
});
