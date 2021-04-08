import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Etudiant }from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(email, password) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/etudiant/login`, { email, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("email", userData.email);
          let tokenStr = "Bearer " + userData.token;
          console.log(tokenStr);
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("role", userData.role);
          sessionStorage.setItem("id", userData.id);
          return userData;
        })
      );
  }
  Register(classe, dateNaissance, numTel, nom, prenom, role, email, password, login) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/etudiant`, { classe, dateNaissance, numTel, nom, prenom, role, email, password, login })
      .pipe(
        map(userData => {
          return userData;
        })
      );
  }
  projet(sujet, description, etudiant) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/projet`, { sujet, description, etudiant })
      .pipe(
        map(userData => {
          return userData;
        })
      );
  }
  uploadMemoire(fichier) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/upload-memoire`, { fichier })
      .pipe(
        map(userData => {
          return userData;
        })
      );
  }
  
  listeEtudiant() {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/etudiant`);
  }
  listeProfesseur() {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/professeur`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("email");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
  }
  isAdmin(){
    if(sessionStorage.getItem("role")=="ADMIN")
      return true;
  }
  isEtudiant(){
    if(sessionStorage.getItem("role")=="ETUDIANT")
      return true;
  }
  isprofesseur(){
    if(sessionStorage.getItem("role")=="PROF")
      return true;
  }
  isResp(){
    if(sessionStorage.getItem("role")=="RESP")
      return true;
  }

}