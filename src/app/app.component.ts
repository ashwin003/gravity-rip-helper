import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gravity-rip-helper';

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(RulesComponent,{
      panelClass: ['animate__animated','animate__slideInLeft', 'rules-dialog'],
      id: 'rules-container'
    });
  } 
}
