import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Racer } from '../models/racer';

@Component({
  selector: 'app-racer',
  templateUrl: './racer.component.html',
  styleUrls: ['./racer.component.scss']
})
export class RacerComponent {

  @Input() position: number = 0;

  @Input() racer: Racer = { id:0, name: '', avatar: '' };

  @Output() editTriggered: EventEmitter<Racer> = new EventEmitter<Racer>();

  constructor() { }

  handleAvatarClick() {
    this.editTriggered.emit(this.racer);
  }
}
