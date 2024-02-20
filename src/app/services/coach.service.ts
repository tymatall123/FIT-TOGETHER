import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http:HttpClient) {
  }
  coach(user:any){
    return this.http.post(``, user)
  }
   // methode pour lister tous les coachs
getcoach() : Observable<any>{
return this.http.get<any>(``);
}

// methode pour ajouter donnée ves l'api
addcoach(coach : any) {
return this.http.post<any>(``, this.coach);
}

addcoachs(data: any):Observable<any>{
const Token = localStorage.getItem('access_token');

return Token?
this.http.post<any>( ``, data,{
    headers: new HttpHeaders({ 'Authorization': `Bearer {Token} `})
  }) : of(null);
}

getcoachById(id: string): Observable<any> {
return this.http.get<any>(`{}/getcoachById/{id}`);
}

 // methode pour modifier donnée vers l'api
editcoach(id : any, coach:any){
return this.http.put(`{}/coach/edit/ {id}`, this.coach)
}

// mis a jour d'une coach
updatecoach(id: string, coach: any ): Observable<any> {
return this.http.put<any>('https://api.example.com/coachs/' + id, coach);
}

// methode pour supprimer coach
deletecoach(id: any) {
return this.http.delete(`{/}/coach/delete/ {id}`)
}

}




