import { HomeComponent } from './home-page/home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GetStartedComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
