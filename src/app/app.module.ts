import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
