import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Array<UserModel>;

  constructor(private httpClient: HttpClient) {}

  /**
   * Liste des utilisateurs
   */
  public getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>('http://localhost:8080/getUsers');
  }

  /**
  * Supprimer un utilisateur
  */
  public deleteUser (user: UserModel): void {
    this.httpClient.post('http://localhost:8080/deleteUser', JSON.stringify(user)).subscribe();    
    this.getUsers();
  }

}
