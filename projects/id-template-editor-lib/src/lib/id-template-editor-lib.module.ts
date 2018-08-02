import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemplateAppComponent } from './template-app/template-app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { IdTemplateEditorLibComponent } from './id-template-editor-lib.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [IdTemplateEditorLibComponent, TemplateAppComponent],
  exports: [IdTemplateEditorLibComponent]
})
export class IdTemplateEditorLibModule { }
