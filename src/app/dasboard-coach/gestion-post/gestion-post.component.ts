import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-post',
  templateUrl: './gestion-post.component.html',
  styleUrls: ['./gestion-post.component.css']
})
export class GestionPostComponent {
  formData = {
    titre: '',
    path_image: '',
    contenu: '',
  }
  id: any;
  titre: any;
  path_image: any;
  contenu: any;
  regime: any;
  getRegime: any;
  addRegim: any;
  editRegime: any;
post: any;
  

  constructor(private router:Router, private RegimeService:GestionPostComponent){  }
  

  ngOnInit(): void {
    this.listeRegime();
  }

  listeRegime(){
    this.RegimeService.getRegime().subscribe((reponse:any)=>{
      console.log(reponse)
      this.regime = reponse.Posts
      console.log(this.regime)
    })
  }


  // Methode pour ajouter regime
  
  ajoutRegime(){
    let formdata = new FormData();
    formdata.set('titre',this.titre);
    formdata.set('contenu',this.contenu);
    formdata.set('path_image',this.path_image);
    this.RegimeService.addRegim(formdata).subscribe(
      (reponse: any) => {
        console.log("Ajout réussi", reponse);
        // window.location.reload();
      },
      (error: any) => {
        console.error("Erreur lors de l'ajout:", error);
      }
    );
  }
  // méthode pour modifier une vidéo

modifierRegime(regimeId: string): void {
  const regimeUpdate = {
    titre: this.formData.titre,
    contenu: this.formData.contenu,
    path_image: this.formData.path_image,
  };

  this.RegimeService.editRegime(regimeId, regimeUpdate).subscribe(
    (data: any) => {
      console.log("Modification réussie", data);
      window.location.reload();
    },
    (error: any) => {
      console.error("Erreur lors de la modification:", error);
    }
  );
}
  // pour inserer l'image
  getFile(event: any) {
    console.log('img', this.path_image);
    console.warn(event.target.files[0]);
    this.path_image = event.target.files[0] as File;
  }

  // méthode pour la suppréssion des postes

}
