import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { AvatarService } from '../services/avatar.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LazyLoadImageModule]
})
export class AvatarComponent {
  private avatarService = inject(AvatarService);

  @Input() src: string = '';

  @Input() name: string = '';

  @Input() isAlive: boolean = true;

  public get imageSource() {
    return this.avatarService.get(this.src, this.name);
  }
}
