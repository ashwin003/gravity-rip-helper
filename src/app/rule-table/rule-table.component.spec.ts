import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {  MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { RuleTableComponent } from './rule-table.component';
import { Rule } from '../models/rule';

describe('RuleTableComponent', () => {
  let component: RuleTableComponent;
  let fixture: ComponentFixture<RuleTableComponent>;

  const rules: Rule[] = [
    {
      move: 'Advance',
      rolls: {
        'Racer': 'D6 + acceleration',
        'Pushback (GM)': 'D6'
      },
      outcome: {
        success: 'Number of places the racer can advance',
        failure: 'Fails if pushback roll is higher than advance roll'
      }
    },

    {
      move: 'Hold',
      rolls: {
        'Racer': 'D6 + weight/acceleration',
        'Pushback (GM)': 'D6'
      },
      outcome: {
        success: 'Unless allowed, no racer can pass',
        failure: 'Racers may get past'
      }
    },

    {
      move: 'Retreat',
      rolls: {
        'Racer': 'No need to roll',
        'Pushback (GM)': 'No need to roll'
      },
      outcome: {
        success: 'Player can retreat any number of places',
        failure: ''
      }
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleTableComponent ],
      imports:[
        MatTableModule,
        MatDividerModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleTableComponent);
    component = fixture.componentInstance;
    component.rules = rules;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right columns', () => {
    const expectedColumns = ['move', 'rolls', 'outcome'];
    const headers = fixture.debugElement.queryAll(By.css('th')).map((de) => de.nativeElement.innerText.toLowerCase());
    expect(component.displayedColumns).toEqual(headers);
    expect(component.displayedColumns).toEqual(expectedColumns);
  });

  it('should display the right rows', () => {
    const rows = fixture.debugElement.queryAll(By.css('tr.mat-row'));
    expect(rows.length).toBe(rules.length);
  });

  it('should display the rules correctly', () => {
    const rows = fixture.debugElement.queryAll(By.css('tr.mat-row'));

    for(let index = 0; index < rows.length; index++) {
      const row = rows[index];
      const rule = rules[index];

      // Move
      const cells = row.children.map((d) => d.nativeElement);
      expect(cells[0].innerText).toEqual(rule.move);

      // Rolls
      const rolls = Object.keys(rule.rolls).map((k) => k + '\n' + rule.rolls[k]).sort();
      const printedRolls = [...cells[1].children].map(c => c.innerText).sort();
      expect(printedRolls).toEqual(rolls);

      // Outcomes
      const outcomes = [rule.outcome.success, rule.outcome.failure].filter(e => e != '');
      const printedOutcomes = [...cells[2].children].filter(c => c.nodeName == 'SPAN').map(c => c.innerText);
      expect(printedOutcomes).toEqual(outcomes);
    }
  });
});
