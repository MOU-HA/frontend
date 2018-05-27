import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/restResponse.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private htttpClient: HttpClient) { }

  /**
   * Methode de validation des champs obligatoires
   * @param user
   */
  public validate(user: UserModel): boolean {
    let isValide = true;

    if (!user.firstName) {
      isValide = false;
    }

    if (!user.firstSurname) {
      isValide = false;
    }

    if (!user.address) {
      isValide = false;
    }
    return isValide;
  }

  /**
   *
   * @param user Methode d'ajout d'un nouveau utilisateur
   */
  saveOrUpdate (user: UserModel): Observable<RestResponse> {
     return this.htttpClient.post<RestResponse>('http://localhost:8080/saveOrUpdate', JSON.stringify(user));
  }
}
