import { Component, OnInit, Inject } from '@angular/core';
import { Racer } from '../models/racer';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-racer',
  templateUrl: './edit-racer.component.html',
  styleUrls: ['./edit-racer.component.scss'],
})
export class EditRacerComponent implements OnInit {
  originalAvatar: string;
  constructor(
    public dialogRef: MatDialogRef<EditRacerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Racer
  ) {
    this.originalAvatar = data.avatar;
  }

  ngOnInit(): void {}

  handleAvatarSelection(selected: string) {
    this.data.avatar = selected;
  }

  onCancel(): void {
    this.data.avatar = this.originalAvatar;
    this.dialogRef.close();
  }
}
