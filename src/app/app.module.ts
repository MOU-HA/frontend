import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserService } from './create-user/create-user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, CreateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
