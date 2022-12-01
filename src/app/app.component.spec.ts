import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { AppComponent } from './app.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { RulesComponent } from './rules/rules.component';
import { RaceComponent } from './race/race.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        DragDropModule,
        MatToolbarModule,
        MatTabsModule,
        MatSidenavModule,
        MatCardModule
      ],
      declarations: [
        RulesComponent,
        RaceComponent,
        AppComponent,
      ],
      providers: [
        { provide: MatDialog, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the right components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const mainContainers = fixture.debugElement.queryAll(By.css('.main-container')).map((d) => d.children[0].name);
    const expectedContainers = ["app-rules", "app-race"];
    expect(mainContainers).toEqual(expectedContainers);
  });
});
