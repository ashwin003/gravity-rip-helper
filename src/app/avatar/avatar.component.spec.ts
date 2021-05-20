import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarService } from '../services/avatar.service';

import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarComponent ],
      providers:[
        AvatarService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the proper image source when avatar is not provided', () => {
    const src = '';
    const name = 'John Smith';

    component.src = src;
    component.name = name;
    fixture.detectChanges();

    const expectedUri = 'https://ui-avatars.com/api/?size=128&background=random&name=John%20Smith';

    expect(component.imageSource).toBe(expectedUri);
  });

  it('should set the proper image source when avatar is provided', () => {
    const src = 'assets/Raymond.png';
    const name = 'John Smith';

    component.src = src;
    component.name = name;
    fixture.detectChanges();

    expect(component.imageSource).toBe(src);
  });
});
