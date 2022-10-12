import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { NotesComponent } from './components/notes/notes.component';
import { MatDrawerToggleDirective } from './directives/MatDrawerToggle.directive';
import { TagsComponent } from './components/tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    NotesComponent,
    MatDrawerToggleDirective,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MaterialUiModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
