import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any;

  constructor(private http:HttpClient) {
  }
  register(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/register`, user)
  }
  
  // methode pour la connexion
  login(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/login`, user)
  }

  // Méthode pour la déconnection.
  logout(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/logout`, user)
  }
}




