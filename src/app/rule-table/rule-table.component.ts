import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Rule } from '../models/rule';

@Component({
    selector: 'app-rule-table',
    templateUrl: './rule-table.component.html',
    styleUrls: ['./rule-table.component.scss'],
    standalone: false
})
export class RuleTableComponent {

  @Input() rules: Rule[] = [];
  displayedColumns: string[] = ['move', 'rolls', 'outcome'];

  constructor(private sanitizer: DomSanitizer) { }

  getSanitizedHtml(value: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
