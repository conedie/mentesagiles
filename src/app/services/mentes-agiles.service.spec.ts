import { TestBed } from '@angular/core/testing';

import { MentesAgilesService } from './mentes-agiles.service';

describe('MentesAgilesService', () => {
  let service: MentesAgilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentesAgilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
