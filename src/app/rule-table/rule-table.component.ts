import { Component, Input } from '@angular/core';
import { Rule } from '../models/rule';

@Component({
  selector: 'app-rule-table',
  templateUrl: './rule-table.component.html',
  styleUrls: ['./rule-table.component.scss']
})
export class RuleTableComponent {

  @Input() rules: Rule[] = [];
  displayedColumns: string[] = ['move', 'rolls', 'outcome'];

  constructor() { }

}
