import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss']
})
export class AvatarSelectorComponent implements OnInit {
  @Input() selected: string = '';

  @Output() avatarSelected: EventEmitter<string> = new EventEmitter<string>();

  available_avatars = this.updatePath([
    'Raymond.png',
    'Marshal.png',
    'Bam.png',
    'Apple.png',
    'Robin.png',
    'Drago.png',
    'Eloise.png',
    'KKSlider.png',
    'Beardo.png',
    'Kabuki.png',
    'Daisy.png',
    'Skye.png',
    'Diana.png',
    'Erik.png',
    'Cole.png',
    'Bluebear.png',
    'Audie.png',
    'Ankha.png'
  ]);

  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {
  }

  isSelected(avatar: string) {
    return this.selected === avatar;
  }

  updatePath(avatars: string[]) {
    return avatars.map(a => 'assets/' + a);
  }

  select(avatar: string) {
    this.avatarSelected.emit(avatar);
  }

  public imageSource(avatar: string) {
    return this.avatarService.get(avatar, avatar);
  }
}
