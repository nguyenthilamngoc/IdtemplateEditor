import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdTemplateEditorLibComponent } from './id-template-editor-lib.component';
import { MyNavComponent } from './my-nav/my-nav.component';

describe('IdTemplateEditorLibComponent', () => {
  let component: IdTemplateEditorLibComponent;
  let fixture: ComponentFixture<IdTemplateEditorLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdTemplateEditorLibComponent, MyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdTemplateEditorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
