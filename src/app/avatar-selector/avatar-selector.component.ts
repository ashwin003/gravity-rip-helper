import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
    selector: 'app-avatar-selector',
    templateUrl: './avatar-selector.component.html',
    styleUrls: ['./avatar-selector.component.scss'],
    standalone: false
})
export class AvatarSelectorComponent {
  @Input() selected: string = '';

  @Output() avatarSelected: EventEmitter<string> = new EventEmitter<string>();

  available_avatars = this.updatePath([
    'Raymond',
    'Marshal',
    'Bam',
    'Apple',
    'Robin',
    'Drago',
    'Eloise',
    'KKSlider',
    'Beardo',
    'Kabuki',
    'Daisy',
    'Skye',
    'Diana',
    'Erik',
    'Cole',
    'Bluebear',
    'Audie',
    'Ankha'
  ]);

  constructor(private avatarService: AvatarService) { }

  isSelected(avatar: string) {
    return this.selected === avatar;
  }

  updatePath(avatars: string[]) {
    return avatars.map(a => this.avatarService.getRoboAvatarUri(a, 75, 75));
  }

  select(avatar: string) {
    this.avatarSelected.emit(avatar);
  }

  public imageSource(avatar: string) {
    return this.avatarService.get(avatar, avatar);
  }
}
