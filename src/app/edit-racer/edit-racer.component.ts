import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Racer } from '../models/racer';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { AvatarSelectorComponent } from '../avatar-selector/avatar-selector.component';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-edit-racer',
    templateUrl: './edit-racer.component.html',
    styleUrls: ['./edit-racer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatToolbar, MatDialogTitle, CdkScrollable, MatDialogContent, AvatarSelectorComponent, MatDialogActions, MatButton, MatDialogClose]
})
export class EditRacerComponent {
  dialogRef = inject<MatDialogRef<EditRacerComponent>>(MatDialogRef);
  data = inject<{
    racer: Racer;
    position: number;
}>(MAT_DIALOG_DATA);

  originalAvatar: string;
  position: number;

  constructor() {
    const data = this.data;

    this.originalAvatar = data.racer.avatar;
    this.position = data.position;
  }

  handleAvatarSelection(selected: string) {
    this.data.racer.avatar = selected;
  }

  onCancel(): void {
    this.data.racer.avatar = this.originalAvatar;
    this.dialogRef.close();
  }
}
