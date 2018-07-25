import { TestBed, inject } from '@angular/core/testing';

import { IdTemplateEditorLibService } from './id-template-editor-lib.service';

describe('IdTemplateEditorLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdTemplateEditorLibService]
    });
  });

  it('should be created', inject([IdTemplateEditorLibService], (service: IdTemplateEditorLibService) => {
    expect(service).toBeTruthy();
  }));
});
