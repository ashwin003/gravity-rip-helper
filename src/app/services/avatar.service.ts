import { Injectable } from '@angular/core';
import { generateAvatar, BackgroundSets, CharacterSets } from 'robohash-avatars'

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
      'male',
      'female',
      'human',
      'bottts',
      'avataaars',
      'micah'
    ];

    const sprite = this.pickRandom(availableSprites);

    return 'https://avatars.dicebear.com/api/' + sprite + '/' + encodeURIComponent(name) + '.svg?width=' + width + '&height=' + height;
  }

  private generateRobohashAvatarUri(name: string, width: number, height: number): string {
    const availableBackgroundSets = [
      BackgroundSets.RandomBackground1,
      BackgroundSets.RandomBackground2
    ];

    const availableCharacterSets = [
      CharacterSets.DisembodiedHeads,
      CharacterSets.Humans,
      CharacterSets.Monsters,
      CharacterSets.Kittens,
      CharacterSets.Robots
    ];

    const background = this.pickRandom(availableBackgroundSets);

    const character = this.pickRandom(availableCharacterSets);

    return generateAvatar(
      {
        username: encodeURIComponent(name),
        background: background,
        characters: character,
        width: width,
        height: height,
      }
    );
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
