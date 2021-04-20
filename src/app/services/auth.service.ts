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
      .post<any>(`${environment.apiUrl}/login`, { email, password })
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

  downloadMemoire(idMemoire): void {
    this.httpClient
    .get(`${environment.apiUrl}/download-memoire/${idMemoire}`, { responseType: 'blob'})
    .subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }
  getMemoire() {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/memoire`);
  }
  downloadRapport(idRapport): void {
    this.httpClient
    .get(`${environment.apiUrl}/download-rapport/${idRapport}`, { responseType: 'blob'})
    .subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }
  getRapport() {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/rapportRapporteur`);
  }
  downloadAutorisation(idAutorisation): void {
    this.httpClient
    .get(`${environment.apiUrl}/download-autorisation/${idAutorisation}`, { responseType: 'blob'})
    .subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }
  getAutorisation() {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/autorisation`);
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
  getEncadreurs(idEtudiant) {
    return this.httpClient
      .get<any>(`${environment.apiUrl}/encadreur/etudiant/${idEtudiant}`);
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

  ajoutRapporteur(idProf,idEtudiant) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/ajout-rapporteur`, { idProf,idEtudiant })
      .pipe(
        map(userData => {
          return userData;
        })
      );
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