
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TemplateAppComponent } from './template-app.component';

describe('MyNavComponent', () => {
  let component: TemplateAppComponent;
  let fixture: ComponentFixture<TemplateAppComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, LayoutModule],
      declarations: [TemplateAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
