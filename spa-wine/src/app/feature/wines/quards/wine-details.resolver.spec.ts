import { TestBed } from '@angular/core/testing';

import { WineDetailsResolver } from './wine-details.resolver';

describe('WineDetailsResolver', () => {
  let resolver: WineDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WineDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
