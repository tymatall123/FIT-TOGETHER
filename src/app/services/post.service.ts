import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  getpost() : Observable<any>{
    return this.http.get<any>(`https://swagger.imaletbenji.com/api/posts`);
    }
  
  constructor(private http:HttpClient) { }
  listePost(){
    const Token = localStorage.getItem('token');

     return this.http.get<any>( `https://swagger.imaletbenji.com/api/posts`)
  

  }
  
  addPost(data: any): Observable<any> {
    const Token = localStorage.getItem('token');
  
    console.log(Token);
  
  
    if (Token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
      return this.http.post<any>('https://swagger.imaletbenji.com/api/post', data, { headers });
    } else {
      return of(null);
    }
  }
  
  editpost(id : any, post:any){
    const Token = localStorage.getItem('token');
  
    console.log(Token);
  
  
    if (Token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
      return this.http.post<any>(`https://swagger.imaletbenji.com/api/post/${id}`, post, { headers });
    } else {
      return of(null);
    }
  
  }
  

  // supprimer post
  deletePost(id: string): Observable<any> {
    const Token = localStorage.getItem('token');
  
    console.log(Token);
  
  
    if (Token) {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${Token}` });
      return this.http.delete<any>('https://swagger.imaletbenji.com/api/post/' + id, { headers });
  
    } else {
      return of(null);
    }
  }
}
