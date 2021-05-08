import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RulesComponent } from './rules/rules.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gravity-rip-helper';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver) {
  }

  openDialog() {
    this.dialog.open(RulesComponent,{
      panelClass: ['animate__animated','animate__slideInLeft', 'rules-dialog'],
      id: 'rules-container'
    });
  } 
}
