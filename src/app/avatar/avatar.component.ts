import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() src: string = '';

  @Input() name: string = '';
  constructor() {}

  ngOnInit(): void {}

  public get imageSource() {
    return !!this.src ? this.src : this.generateAvatarUri();
  }

  private generateAvatarUri() {
    return (
      'https://ui-avatars.com/api/?size=128&background=random&name=' +
      encodeURIComponent(this.name)
    );
  }
}
