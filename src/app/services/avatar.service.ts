import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor() { }

  public get(avatar: string, name: string): string {
    return !!avatar ? avatar : this.generateAvatarUri(name);
  }

  private generateAvatarUri(name: string) {
    return (
      'https://ui-avatars.com/api/?size=128&background=random&name=' +
      encodeURIComponent(name)
    );
  }
}
