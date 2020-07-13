import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
