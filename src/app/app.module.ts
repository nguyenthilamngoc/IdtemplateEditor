import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatMenuModule,
    MatCardModule,
   } from '@angular/material';

import { NavComponent } from './nav/nav.component';
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'template-editor', component : TemplateEditorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TemplateEditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
