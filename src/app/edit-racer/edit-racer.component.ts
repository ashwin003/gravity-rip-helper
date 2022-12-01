import { Component, OnInit, Inject } from '@angular/core';
import { Racer } from '../models/racer';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-edit-racer',
  templateUrl: './edit-racer.component.html',
  styleUrls: ['./edit-racer.component.scss'],
})
export class EditRacerComponent {
  originalAvatar: string;
  position: number;

  constructor(
    public dialogRef: MatDialogRef<EditRacerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { racer: Racer; position: number }
  ) {
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
