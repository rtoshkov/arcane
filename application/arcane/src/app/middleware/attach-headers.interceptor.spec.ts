import { TestBed } from '@angular/core/testing';

import { AttachHeadersInterceptor } from './attach-headers.interceptor';

describe('AttachHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AttachHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AttachHeadersInterceptor = TestBed.inject(AttachHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
