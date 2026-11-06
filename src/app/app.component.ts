import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RulesComponent } from './rules/rules.component';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RaceComponent } from './race/race.component';
import { HintsComponent } from './hints/hints.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatSidenavContainer, MatSidenav, MatToolbar, RulesComponent, MatSidenavContent, MatIconButton, MatIcon, RaceComponent, HintsComponent, AsyncPipe]
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);

  title = 'gravity-rip-helper';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait, Breakpoints.WebPortrait])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
