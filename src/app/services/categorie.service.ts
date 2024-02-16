import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) {
  }
  categorie(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/categorie`, user)
  }
   // methode pour recuperer tous les catégorie
getcategorie() : Observable<any>{
return this.http.get<any>(`https://swagger.imaletbenji.com/api/categories`);
}

// methode pour ajouter donnée ves l'api
addcategories(categorie : any) {
return this.http.post<any>(`https://swagger.imaletbenji.com/api/categories`, this.categorie);
}

addcategorie(data: any):Observable<any>{
const Token = localStorage.getItem('access_token');

return Token?
this.http.post<any>( `https://swagger.imaletbenji.com/api/categorie`, data,{
    headers: new HttpHeaders({ 'Authorization': `Bearer {Token} `})
  }) : of(null);
}

getcategorieById(id: string): Observable<any> {
return this.http.get<any>(`{https://swagger.imaletbenji.com/api/categorie}/getcategorieById/{id}`);
}

 // methode pour modifier donnée vers l'api
editcategorie(id : any, categorie:any){
return this.http.put(`{}/categorie/edit/ {id}`, this.categorie)
}

// mis a jour d'une categorie
updatecategorie(id: string, categorie: any ): Observable<any> {
return this.http.put<any>('https://api.example.com/categories/' + id, categorie);
}

// methode pour supprimer categorie
deletecategorie(id: any) {
return this.http.delete(`{https://swagger.imaletbenji.com/api/categories/}/categorie/delete/ {id}`)
}

}


