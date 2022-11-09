import { TestBed } from '@angular/core/testing';

import { UserResolverResolver } from './user-resolver.resolver';

describe('UserResolverResolver', () => {
  let resolver: UserResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
