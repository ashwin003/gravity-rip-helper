import { Component } from '@angular/core';

@Component({
    selector: 'app-hints',
    templateUrl: './hints.component.html',
    styleUrls: ['./hints.component.scss'],
    standalone: false
})
export class HintsComponent {

  available_hints = [
    'Click on the avatar on the center of the tile to update the racer',
    'Drag the tile in order to move the racer to a new position',
    'Double click on the tile outside the avatar in order to force retire a racer',
    'Retired racers move to the end of the pack, and cannot be interacted with anymore'
  ];

  selected_hint = 0;

  public get active_hint() {
    return this.available_hints[this.selected_hint];
  }

  onComplete() {
    this.selected_hint = (this.selected_hint + 1) % this.available_hints.length;
  }

}
