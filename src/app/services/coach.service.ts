import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http:HttpClient) {
  }
// liste des coach
getcoach() : Observable<any>{
  return this.http.get<any>(`https://swagger.imaletbenji.com/api/users`);
  }// méthode pour supprimer coach
deletecoach(id: string): Observable<any> {
  const Token = localStorage.getItem('token');

  console.log(Token);


  if (Token) {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
    return this.http.delete<any>('https://swagger.imaletbenji.com/api/user/' + id, { headers });

  } else {
    return of(null);
  }
}



}




