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

  @Input() racer: Racer = { id: 0, name: '', avatar: '', isAlive: true };

  @Output() editTriggered: EventEmitter<Racer> = new EventEmitter<Racer>();

  handleAvatarClick() {
    if(this.racer.isAlive) {
      this.editTriggered.emit(this.racer);
    }
  }

  public get tooltip() {
    return !!this.racer.avatar ? '' : this.racer.name;
  }
}
