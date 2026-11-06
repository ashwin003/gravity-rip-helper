import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor() { }

  public get(avatar: string, name: string): string {
    return !!avatar ? avatar : this.generateAvatarUri(name);
  }

  public getRoboAvatarUri(name: string, width: number, height: number): string {
    const randomizer = Math.random();

    if(randomizer < 0.5) {
      return this.generateDicebearUri(name, width, height);
    }
    
    return this.generateRobohashAvatarUri(name, width, height);
  }

  private generateDicebearUri(name: string, width: number, height: number): string {
    const availableSprites = [
      'adventurer',
      'lorelei',
      'pixel-art',
      'bottts',
      'avataaars',
      'thumbs'
    ];

    const sprite = this.pickRandom(availableSprites);

    return 'https://api.dicebear.com/9.x/' + sprite + '/' + 'svg?width=' + width + '&height=' + height + '&seed=' + encodeURIComponent(name);
  }

  // RoboHash API: https://robohash.org
  // set1 = robots, set2 = monsters, set3 = disembodied heads, set4 = kittens, set5 = humans
  // bg1 / bg2 = background sets
  private generateRobohashAvatarUri(name: string, width: number, height: number): string {
    const availableBackgroundSets = ['bg1', 'bg2'];
    const availableCharacterSets = ['set1', 'set2', 'set3', 'set4', 'set5'];

    const background = this.pickRandom(availableBackgroundSets);
    const character = this.pickRandom(availableCharacterSets);

    return 'https://robohash.org/' + encodeURIComponent(name) + '?set=' + character + '&bgset=' + background + '&size=' + width + 'x' + height;
  }

  private pickRandom<T>(array: T[] ): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generateAvatarUri(name: string) {
    return (
      'https://ui-avatars.com/api/?size=128&background=random&name=' +
      encodeURIComponent(name)
    );
  }
}
