import { Component, Input, OnInit } from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() src: string = '';

  @Input() name: string = '';

  constructor(private avatarService: AvatarService) {}

  ngOnInit(): void {}

  public get imageSource() {
    return this.avatarService.get(this.src, this.name);
  }
}
