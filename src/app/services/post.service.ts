import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  listePost(){
    const Token = localStorage.getItem('token');

return this.http.get<any>( `https://swagger.imaletbenji.com/api/posts`)
  
  }
}
