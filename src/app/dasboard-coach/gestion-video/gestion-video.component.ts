import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/video/service.service';

@Component({
  selector: 'app-gestion-video',
  templateUrl: './gestion-video.component.html',
  styleUrls: ['./gestion-video.component.css']
})
export class GestionVideoComponent {
  formdata =  {
    titre: '',
    path_video :'',
    duree : '',
    sous_categorie_id :'',
    updated_at:'',
    created_at:'',
    // videos: Video[],
  }
titre: any;
path_video: any;
created_at: any;
updated_at: any;
videos:any;
duree:any;
sous_categorie_id:any;


   
constructor(private router:Router, private videoService : ServiceService){}

ngOnInit(): void {
  this.listeVideo();
}

listeVideo(){
this.videoService.getvideos().subscribe((reponse:any)=>{
  console.log(reponse)
  this.videos=reponse.Videos
  console.log(this.videos, "les videos")
})

}
// Méthode pour ajouter une vidéo

ajouterVideo(): void {
if (!this.selectedVideoFile) {
  console.error("Veuillez sélectionner un fichier vidéo.");
  return;
}

this.videoService.uploadVideo(this.selectedVideoFile).subscribe(
  (uploadData: any) => {
    // Utilisez l'ID de la vidéo uploadée dans votre ajout de vidéo.
    const videoId = uploadData.videoId;

    const videoToAdd = {
      titre: this.formdata.titre,
      duree: this.formdata.duree,
      sous_categorie_id: this.formdata.sous_categorie_id,
      path_video: this.formdata.path_video,
      updated_at: this.formdata.updated_at,
      created_at: this.formdata.created_at,
    };
      console.log(videoToAdd)
    this.videoService.addvideo(videoToAdd).subscribe(
      (data) => {
        console.log("Ajout réussi", data);
        window.location.reload();
      },
      (error) => {
        console.error("Erreur lors de l'ajout:", error);
      }
    );
  },
  (uploadError) => {
    console.error("Erreur lors de l'upload de la vidéo:", uploadError);
  }
);
}

sendVideo(){
let formdata = new FormData();
formdata.set('titre',this.titre);
formdata.set('duree',this.duree);
formdata.set('sous_categorie_id',this.sous_categorie_id);
formdata.set('path_video',this.path_video);
this.videoService.addvid(formdata).subscribe(
  (reponse: any) => {
    console.log("Ajout réussi", reponse);
    // window.location.reload();
  },
  (error) => {
    console.error("Erreur lors de l'ajout:", error);
  }
);
}


// Méthode pour uploader une vidéo
selectedVideoFile: File | null = null;

onFileSelected(event: any): void {
const file = event.target.files[0];
this.selectedVideoFile = file;
this.path_video=file;
}


// méthode pour modifier une vidéo

// modifierVideo(videoId: string): void {
//   const videoToUpdate = {
//     titre: this.fomdata.titre,
//     duree: this.fomdata.duree,
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
