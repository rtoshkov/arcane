import { TestBed } from '@angular/core/testing';

import { RemoveInvalidTokenInterceptor } from './remove-invalid-token.interceptor';

describe('RemoveInvalidTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RemoveInvalidTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RemoveInvalidTokenInterceptor = TestBed.inject(RemoveInvalidTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
