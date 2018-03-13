import { TestBed, inject } from '@angular/core/testing';

import { MailChimpApiService } from './mail-chimp-api.service';

describe('MailChimpApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailChimpApiService]
    });
  });

  it('should be created', inject([MailChimpApiService], (service: MailChimpApiService) => {
    expect(service).toBeTruthy();
  }));
});
