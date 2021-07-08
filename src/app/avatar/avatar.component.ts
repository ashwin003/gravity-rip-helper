import { Component, Input } from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() src: string = '';

  @Input() name: string = '';

  @Input() isAlive: boolean = true;

  constructor(private avatarService: AvatarService) {}

  public get imageSource() {
    return this.avatarService.get(this.src, this.name);
  }
}
