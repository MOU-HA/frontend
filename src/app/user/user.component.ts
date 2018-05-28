import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { UserModel } from '../model/user.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: Array<UserModel>;

  constructor(private userService: UserService, private route: Router) {  
    sessionStorage.clear();  
  }

  ngOnInit() {
    this.loadUsers();
   
  }

  private loadUsers (): void {
      this.userService.getUsers().subscribe(res => {
      this.users  = res;
    });

  }


   public editUser (user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.route.navigate(['/addUser']);
  }

   public deleteUser (user: UserModel): void {
    this.userService.deleteUser(user);
     sessionStorage.clear();  
  }


  
}
