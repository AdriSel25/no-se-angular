import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserComponent } from './input-user/input-user.component';
import { InputPasswComponent } from './input-passw/input-passw.component';
import { BtnSubmitComponent } from './btn-submit/btn-submit.component';
import { LoginPComponent } from './login-p/login-p.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserComponent,
    InputPasswComponent,
    BtnSubmitComponent,
    LoginPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
