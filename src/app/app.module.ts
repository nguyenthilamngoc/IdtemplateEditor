import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdTemplateEditorLibModule } from 'id-template-editor-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IdTemplateEditorLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
