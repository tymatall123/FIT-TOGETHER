import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-gestion-coach',
  templateUrl: './gestion-coach.component.html',
  styleUrls: ['./gestion-coach.component.css']
})
export class GestionCoachComponent  implements OnInit{
  
  coachs: any[] = [];
Users: any;

  constructor(private router: Router, private CoachService:CoachService) { }


  ngOnInit(): void {
    this.listcoach()
  }

  //lister les coach
  listcoach(){
    this.CoachService.getcoach().subscribe((reponse) => {
      this.coachs = reponse.Users
      console.log(this.coachs, 'liste de tous les coachs')
  })
}
// méthode pour la suppression des coachs
supprimercoatch(id:string): void {
  const confirmation = confirm("Êtes-vous sûr de vouloir supprimer les coachs ?");
  if (confirmation) {
    this.CoachService.deletecoach(id).subscribe(
      (data: any) => {
        console.log("Suppression réussie", data);
        this.listcoach();
        // Actualiser les données
      },
      (error) => {
        console.error("Erreur lors de la suppression:", error);
      }
    );
  }
}
}
