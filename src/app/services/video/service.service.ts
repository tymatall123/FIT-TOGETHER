import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getcategorie() {
    throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) {
  }
  video(user:any){
    return this.http.post(`https://swagger.imaletbenji.com/api/video`, user)
  }
   // methode pour recuperer tous les vidéos
getvideos() : Observable<any>{
return this.http.get< any>(`https://swagger.imaletbenji.com/api/videos`);
}

// methode pour ajouter donnée ves l'api
addvideo(video : any) {
return this.http.post<any>(`https://swagger.imaletbenji.com/api/video`, video);
}

addvid(data: any):Observable<any>{
const Token = localStorage.getItem('access_token');

return Token?
this.http.post<any>( `https://swagger.imaletbenji.com/api/video`, data,{
    headers: new HttpHeaders({ 'Authorization': `Bearer {Token} `})
  }) : of(null);
}

getVideoById(id: string): Observable<any> {
return this.http.get<any>(`{https://swagger.imaletbenji.com/api/video}/getVideoById/{id}`);
}

 // methode pour modifier donnée vers l'api
editVideo(id : any, video:any){
return this.http.put(`{}/video/edit/ {id}`, this.video)
}

// mis a jour d'une vidéo
updateVideo(id: string, video: any ): Observable<any> {
return this.http.put<any>('https://api.example.com/videos/' + id, video);
}

// methode pour supprimer video
deleteVideo(id: any) {
return this.http.delete(`{https://swagger.imaletbenji.com/api/videos/}/video/delete/ {id}`)
}

ListPost(){
  return this.http.get(`https://swagger.imaletbenji.com/api/posts`)
}
// méthode pour oploader une vidéo
uploadVideo(file: File): Observable<any> {
const formData = new FormData();
formData.append('video', file, file.name);

const url = `{}`;
return this.http.post(url, formData);
}
}
