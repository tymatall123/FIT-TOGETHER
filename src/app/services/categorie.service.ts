import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  supprimercategorie(CategorieId: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
  }
  categorie(user: any) {
    return this.http.post(`https://swagger.imaletbenji.com/api/categorie`, user)
  }
  // methode pour recuperer tous les catégorie
  getcategorie(): Observable<any> {
    return this.http.get<any>(`https://swagger.imaletbenji.com/api/categories`);
  }

  // methode pour ajouter donnée ves l'api
  // addcategories(categorie : any) {
  // return this.http.post<any>(`https://swagger.imaletbenji.com/api/categorie`, this.categorie);
  // }

  addcategorie(data: any): Observable<any> {
    const Token = localStorage.getItem('token');

    console.log(Token);


    if (Token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
      return this.http.post<any>('https://swagger.imaletbenji.com/api/categorie', data, { headers });
    } else {
      return of(null);
    }
  }

  getcategorieById(id: string): Observable<any> {
    return this.http.get<any>(`{https://swagger.imaletbenji.com/api/categorie}/getcategorieById/{id}`);
  }

  // methode pour modifier donnée vers l'api
  editcategorie(id: any, categorie: any) {
    return this.http.put(`{}/categorie/edit/ {id}`, this.categorie)
  }

  // mis a jour d'une categorie
  updatecategorie(id: string, categorie: any): Observable<any> {
    const Token = localStorage.getItem('token');

    console.log(Token);


    if (Token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
      return this.http.post<any>('https://swagger.imaletbenji.com/api/categorie/' + id, categorie, { headers });

    } else {
      return of(null);
    }
  }

  
  // on ajoute le token pour la suppression
  deletecategorie(id: string): Observable<any> {
    const Token = localStorage.getItem('token');

    console.log(Token);


    if (Token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
      return this.http.delete<any>('https://swagger.imaletbenji.com/api/categorie/' + id, { headers });

    } else {
      return of(null);
    }
  }

}


