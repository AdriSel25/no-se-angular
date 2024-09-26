import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPComponent } from './login-p/login-p.component';

const routes: Routes = [
  { path: '', redirectTo: '/login'},
  { path: 'login', component: LoginPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
