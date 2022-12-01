import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { RulesComponent } from './rules/rules.component';
import { RaceComponent } from './race/race.component';
import { RacerComponent } from './racer/racer.component';
import { RuleTableComponent } from './rule-table/rule-table.component';
import { EditRacerComponent } from './edit-racer/edit-racer.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarService } from './services/avatar.service';
import { HintsComponent } from './hints/hints.component';
import { TypingDirective } from './directives/typing.directive';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    declarations: [
        AppComponent,
        RulesComponent,
        RaceComponent,
        RacerComponent,
        RuleTableComponent,
        EditRacerComponent,
        AvatarSelectorComponent,
        AvatarComponent,
        HintsComponent,
        TypingDirective,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DragDropModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatTooltipModule,
        MatDialogModule,
        MatTabsModule,
        MatTableModule,
        MatDividerModule,
        MatBadgeModule,
        MatExpansionModule,
        LazyLoadImageModule
    ],
    providers: [
        AvatarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
