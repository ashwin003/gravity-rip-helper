import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabBody, MatTabGroup, MatTabLabelWrapper, MatTabsModule } from '@angular/material/tabs';
import {  MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { By } from '@angular/platform-browser';
import { RulesComponent } from './rules.component';
import { RuleTableComponent } from '../rule-table/rule-table.component';

describe('RulesComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesComponent, RuleTableComponent ],
      imports:[
        BrowserAnimationsModule,
        MatTabsModule,
        MatTableModule,
        MatDividerModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the tabs', () => {
    const tabGroup = fixture.debugElement.query(By.directive(MatTabGroup));
    const tabs = tabGroup.queryAll(By.directive(MatTabBody));

    expect(tabs.length).toBe(3);
  });

  it('should create the right tabs', () => {
    const tabGroup = fixture.debugElement.query(By.directive(MatTabGroup));
    const tabLabels = tabGroup.queryAll(By.directive(MatTabLabelWrapper)).map((tab) => tab.nativeElement.innerText);
    const expectedLabels = ["Helicam", "Maneuver", "Special Rolls 🎲"];

    expect(tabLabels).toEqual(expectedLabels);
  });

  it('should render rules table in the right tabs', () => {
    const tabGroup = fixture.debugElement.query(By.directive(MatTabGroup));
    const tabs = tabGroup.queryAll(By.css('.rule-table'));
    expect(tabs).toBeTruthy();
  });
});
