import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path: 'appComponent', redirectTo : '/', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent },
  {path: 'users', component: UserComponent },
  {path: 'addUser', component: CreateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
