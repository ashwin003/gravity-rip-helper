import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Rule } from '../models/rule';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatDivider } from '@angular/material/list';
import { KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-rule-table',
    templateUrl: './rule-table.component.html',
    styleUrls: ['./rule-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatDivider, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, KeyValuePipe]
})
export class RuleTableComponent {
  private sanitizer = inject(DomSanitizer);


  @Input() rules: Rule[] = [];
  displayedColumns: string[] = ['move', 'rolls', 'outcome'];

  getSanitizedHtml(value: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
