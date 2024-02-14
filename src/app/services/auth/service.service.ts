import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
  }
  register(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/register`, user)
  }
  
  // methode pour la connexion
  login(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/login`, user)
  }
}
