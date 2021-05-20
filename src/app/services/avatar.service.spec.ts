import { TestBed } from '@angular/core/testing';

import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  let service: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return proper avatar uri when avatar is not set', () => {
    const name = 'John Smith';
    const expectedUri = 'https://ui-avatars.com/api/?size=128&background=random&name=John%20Smith';

    const actualUri = service.get('', name);
    expect(actualUri).toBe(expectedUri);
  });

  it('should return proper avatar uri when avatar is set', () => {
    const name = 'John Smith';
    const expectedUri = 'assets/Raymond.png';

    const actualUri = service.get(expectedUri, name);
    expect(actualUri).toBe(expectedUri);
  });
});
