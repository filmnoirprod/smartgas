import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the reactive forms module
import { ReactiveFormsModule } from '@angular/forms';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
