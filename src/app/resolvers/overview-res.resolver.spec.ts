import { TestBed } from '@angular/core/testing';

import { OverviewResResolver } from './overview-res.resolver';

describe('OverviewResResolver', () => {
  let resolver: OverviewResResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OverviewResResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
