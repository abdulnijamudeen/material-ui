import { TagsComponent } from './components/tags/tags.component';
import { NotesComponent } from './components/notes/notes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: '**',
    redirectTo: 'notes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
