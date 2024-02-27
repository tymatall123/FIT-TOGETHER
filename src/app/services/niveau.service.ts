import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  getniveauservice() : Observable<any>{
    return this.http.get<any>(`https://swagger.imaletbenji.com/api/niveaux`);
    }
  
  constructor(private http:HttpClient) { }
  listeniveau(){
    const Token = localStorage.getItem('token');

return this.http.get<any>( `https://swagger.imaletbenji.com/api/niveaux`)
  

  }
}
