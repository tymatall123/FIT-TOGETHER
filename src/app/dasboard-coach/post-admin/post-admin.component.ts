import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.css']
})
export class PostAdminComponent  implements OnInit{
  posts: any;
  path_image: any;
  titre: string='';
  contenu: string='';


  constructor(
    private router: Router,
    private PostService:PostService,

  ) { }

  ngOnInit(): void {
    this. listePost()
  }



// méthode pour lister toutes les postes
listePost(){
 this.PostService.getpost().subscribe((reponse:any)=> {
  console.log(reponse);
  this.posts = reponse.Posts

  console.log(this.posts, "récupération de tous les postes");
 }) 
}
ajoutPost(){
  let formdata = new FormData();
    formdata.append('titre',this.titre);
    formdata.append('contenu',this.contenu);
    formdata.append('path_image',this.path_image);
    console.log(formdata);
    
    this.PostService.addPost(formdata).subscribe(
      (reponse: any) => {
        console.log("Ajout réussi", reponse);
        // window.location.reload();
      },
      (error) => {
        console.error("Erreur lors de l'ajout:", error);
      }
    );
}

// modification pour les posts
showMessage(arg0: string, arg1: string, arg2: string) {
  throw new Error('Method not implemented.');
}

postChoisi:any;
chargerInfo(post:any){
this.postChoisi=post
this.titre=this.postChoisi.titre;
this.contenu=this.postChoisi.contenu;
this.path_image=this.postChoisi.path_image;

}

// méthode pour la modification
modifierpost(): void {
const PostToUpdate = {
  "titre": this.titre,
  "contenu": this.contenu,
  "image": this.path_image,


  // Autres champs à mettre à jour si nécessaire
};

this.PostService.editpost(this.postChoisi.id, PostToUpdate).subscribe(
  (data: any) => {
    console.log("Modification réussie", data);
    window.location.reload();
  },
  (error) => {
    console.error("Erreur lors de la modification:", error);
  }
);
}























getFile(event: any) {
    console.log('img', this.path_image);
    console.warn(event.target.files[0]);
    this.path_image = event.target.files[0] as File;
  }

}
