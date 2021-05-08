import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

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

}
