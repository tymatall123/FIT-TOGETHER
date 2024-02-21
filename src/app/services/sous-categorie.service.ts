import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  constructor(private http:HttpClient) {
  }
  souscategorie(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/categorie`, user)
  }
   // methode pour recuperer tous les catégorie
getsouscategorie() : Observable<any>{
return this.http.get<any>(`https://swagger.imaletbenji.com/api/sous-categories`);
}

// methode pour ajouter 
// addsouscategorie(categorie : any) {
// return this.http.post<any>(`https://swagger.imaletbenji.com/api/sous-categorie`, this.souscategorie);
// }

addsouscategorie(data: any): Observable<any> {
  const Token = localStorage.getItem('token');

  console.log(Token);


  if (Token) {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
    return this.http.post<any>('https://swagger.imaletbenji.com/api/sous-categorie', data, { headers });
  } else {
    return of(null);
  }
}

getsouscategorieById(id: string): Observable<any> {
return this.http.get<any>(`{https://swagger.imaletbenji.com/api/categorie}/getcategorieById/{id}`);
}

 // methode pour modifier donnée vers l'api
editsouscategorie(id : any, categorie:any){
return this.http.put(`{}/categorie/edit/ {id}`, this.souscategorie)
}

// mis a jour d'une categorie
updatesouscategorie(id: string, categorie: any ): Observable<any> {
return this.http.put<any>('https://api.example.com/categories/' + id, categorie);
}

// methode pour supprimer categorie
deletesouscategorie(id: any) {
return this.http.delete(`{https://swagger.imaletbenji.com/api/categories/}/categorie/delete/ {id}`)
}
}
