import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EditRacerComponent } from './edit-racer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Racer } from '../models/racer';
import { AvatarSelectorComponent } from '../avatar-selector/avatar-selector.component';

describe('EditRacerComponent', () => {
  let component: EditRacerComponent;
  let fixture: ComponentFixture<EditRacerComponent>;
  const racer: Racer = { id: 0, name: 'John Smith', avatar: '' };
  const position: number = 1;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRacerComponent, AvatarSelectorComponent],
      imports: [
        MatToolbarModule,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { racer, position } },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a toolbar with the right header', () => {
    const title = fixture.debugElement.query(By.css('.toolbar > .title')).nativeElement.innerText;
    expect(title).toBe('Racer 1');
  });

  it('should create a footer with the right buttons', () => {
    const actions = fixture.debugElement.queryAll(By.css('.actions  button')).map((de) => de.nativeElement.innerText);
    const expectedActions = ["Cancel", "Ok"];

    expect(actions).toEqual(expectedActions);
  });

  it('should include avatar selector component', () => {
    const avatarSelector = fixture.debugElement.query(By.css('.content')).children[0].name;
    expect(avatarSelector).toBe('app-avatar-selector');
  });
});
