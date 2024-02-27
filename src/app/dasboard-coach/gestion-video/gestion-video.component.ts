import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NiveauService } from 'src/app/services/niveau.service';
import { SousCategorieService } from 'src/app/services/sous-categorie.service';
import { ServiceService } from 'src/app/services/video/service.service';



@Component({
  selector: 'app-gestion-video',
  templateUrl: './gestion-video.component.html',
  styleUrls: ['./gestion-video.component.css']
})
export class GestionVideoComponent {
  formdata1 = {
    titre: '',
    path_video: '',
    niveau_id: '',
    sous_categorie_id: '',
  }

  titre: any ="";
  path_video: any ="";
  // created_at: any;
  // updated_at: any;
  videos: any;
  niveau: any;
  sous_categorie: any;
  souscategories: any;
  Niveaux: any;
  tabVideo:any[]=[];
  tabVideoRecup:any;


  constructor(
    private router: Router,
    private videoService: ServiceService,
    private SousCategorieService: SousCategorieService,
    private NiveauService: NiveauService,
  ) { }

  ngOnInit(): void {
    this.listeVideo();
    // this.listesouscategorie();
    // this.listeniveau();
    if(!localStorage.getItem("video")){
      localStorage.setItem("video", JSON.stringify(this.tabVideo))
    }
    this.tabVideoRecup=JSON.parse(localStorage.getItem("video") || "[]");
    console.log(this.tabVideoRecup);
    
  }
  // listeniveau(){
  //   this.NiveauService.getniveauservice().subscribe((reponse:any) => {
  //     console.log(reponse);
  //     this.Niveaux = reponse.Niveaux
  //     console.log(this.Niveaux, "recupére moi tous les niveaux");
      
      
  //   })
  // }

  listeVideo() {
    this.videoService.getvideos().subscribe((reponse: any) => {
      console.log(reponse)
      this.videos = reponse.Videos
      console.log(this.videos, "les videos")
    })

  }

  // listesouscategorie() {
  //   this.SousCategorieService.getsouscategorie().subscribe((reponse) => {
  //     this.souscategories = reponse.data;
  //     console.log('sous_categorie', this.souscategories);
  //   });
  // }
  // Méthode pour ajouter une vidéo

    // Méthode pour uploader une vidéo
    selectedVideoFile: File | null = null;

  // ajouterVideo(): void {

  //   if (!this.selectedVideoFile) {
  //     console.error("Veuillez sélectionner un fichier vidéo.");
  //     return;
  //   }

  //   this.videoService.uploadVideo(this.selectedVideoFile).subscribe(
  //     (uploadData: any) => {
  //       // Utilisez l'ID de la vidéo uploadée dans votre ajout de vidéo.
  //       const videoId = uploadData.videoId;

  //       const videoToAdd = {
  //         titre: this.formdata.titre,
  //         niveau_id: this.formdata.niveau_id,
  //         sous_categorie_id: this.formdata.sous_categorie_id,
  //         path_video: this.formdata.path_video,
  //         updated_at: this.formdata.updated_at,
  //         created_at: this.formdata.created_at,
  //       };
  //       console.log(videoToAdd)
  //       this.videoService.addvideo(videoToAdd).subscribe(
  //         (data) => {
  //           console.log("Ajout réussi", data);
  //           window.location.reload();
  //         },
  //         (error) => {
  //           console.error("Erreur lors de l'ajout:", error);
  //         }
  //       );
  //     },
  //     (uploadError) => {
  //       console.error("Erreur lors de l'upload de la vidéo:", uploadError);
  //     }
  //   );
  // }
  // commencement ajout video
//  
 
  sendVideo() {

    console.log("pathhhhhhh");
    console.log(this.path_video);
    
    
    let newVideo = {
      titre: this.titre,
      niveau_id: this.niveau,
      sous_categorie_id: this.sous_categorie,
      path_video: this.path_video,
      
    }
    // console.log(newVideo);
    // console.log('path_video', this.path_video);


    // const formdata = new FormData();
    // formdata.append('titre', this.titre);
    // formdata.append('niveau_id', this.niveau_id);
    // formdata.append('sous_categorie_id', this.sous_categorie_id);
    // formdata.append('path_video', this.path_video);
    // console.log(formdata);

    // console.log("mon formata du titre",this.titre)
    // console.log("mon formata niveau_id",this.niveau_id)
    // console.log("mon formata categorie",this.sous_categorie_id)
    // console.log("mon formata path_video",this.path_video)

    console.log("newVideo: ", newVideo);
    


    this.videoService.addvideo(newVideo).subscribe((reponse) => {
        console.log(reponse,'reponse addVideo');
        console.log(newVideo)
        // this.listeVideo();
      },
      (error) => {
        console.error("Erreur lors de l'ajout:", error);
      }
    );
    // fin de l'ajout
  }

  envoyerVideo(){
  
  }


  // onFileSelected(event: any): void {
  //   const file = event.target.files[0] as File;
  //   this.selectedVideoFile = file;
  //   this.path_video = file;
  //   console.warn("la video uploader", this.path_video)
  // }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      console.log("file :"+file);
      const reader = new FileReader();
      reader.onload = (readEvent: any) => {
        console.log("url"+readEvent.target.result);
        this.path_video = readEvent.target.result;
      };
      reader.readAsDataURL(file);
    } 
  }

ajoutVideo(){
  const video={
    titre: this.titre,
    niveau: this.niveau,
    sous_categorie: this.sous_categorie,
    path_video: this.path_video,
  }
  console.log(video);
  
  this.tabVideoRecup.push(video);
  console.log(this.tabVideoRecup);
  
  localStorage.setItem("video", JSON.stringify(this.tabVideoRecup))
}

  // méthode pour modifier une vidéo

  // modifierVideo(videoId: string): void {
  //   const videoToUpdate = {
  //     titre: this.fomdata.titre,
  //     niveau_id: this.fomdata.niveau_id,
  //     sous_categorie_id: this.fomdata.sous_categorie_id,
  //     path_video: this.fomdata.path_video,
  //     updated_at: this.fomdata.updated_at,
  //     created_at: this.fomdata.created_at,
  //   };

  //   this.videoService.updateVideo(videoId, videoToUpdate).subscribe(
  //     (data: any) => {
  //       console.log("Modification réussie", data);
  //       window.location.reload();
  //     },
  //     (error) => {
  //       console.error("Erreur lors de la modification:", error);
  //     }
  //   );
  // }


  // méthode pour la suppression 
  

}
