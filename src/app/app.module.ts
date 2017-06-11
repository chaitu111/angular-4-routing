import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: '', component: HomeComponent },
      { path: 'home',  component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent } // always put most generic route at last
      
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
