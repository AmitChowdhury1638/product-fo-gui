import { TestBed } from '@angular/core/testing';

import { LocaleTranslationService } from './locale-translation.service';

describe('LocaleTranslationService', () => {
  let service: LocaleTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaleTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
