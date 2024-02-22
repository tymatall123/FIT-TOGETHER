import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  
  categories: any[] = [];

;
  constructor(private router: Router, private CategorieService: CategorieService) { }

  ngOnInit(): void {
    this.listecategorie();
  }

  listecategorie() {
    this.CategorieService.getcategorie().subscribe((reponse) => {
      this.categories = reponse.Categories
      console.log(this.categories, 'categorie')

      // console.log(typeof(reponse),'fdfzffz');
      
    })
  }
  // méthode pour ajouter catégorie
  titre: string = "";
  ajoutcategorie(){
   const data = {
    "categorie": this.titre
  }

  console.log(data);
  
this.CategorieService.addcategorie(data).subscribe(
  (reponse) => {
    console.log("Ajout catégorie réussi", reponse);
    this.listecategorie();
  },
  (error) => {
    console.error("Erreur lors de l'ajout:", error);
  }
);
  }
  showMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  categorie:any;
 chargerInfo(cat:any){
  this.categorie=cat;
  this.titre=cat.categorie
 }
  
// méthode pour la modification
modifierCategorie(): void {
  const categorieToUpdate = {
    "categorie": this.titre,
    // Autres champs à mettre à jour si nécessaire
  };

  this.CategorieService.updatecategorie(this.categorie.id, categorieToUpdate).subscribe(
    (data: any) => {
      console.log("Modification réussie", data);
      window.location.reload();
    },
    (error) => {
      console.error("Erreur lors de la modification:", error);
    }
  );
}


//méthode pour la suppression
supprimerCategorie(CategorieId: string): void {
  const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");
  if (confirmation) {
    this.CategorieService.deletecategorie(CategorieId).subscribe(
      (data: any) => {
        console.log("Suppression réussie", data);
        this.listecategorie();
        // Actualiser les données
      },
      (error) => {
        console.error("Erreur lors de la suppression:", error);
      }
    );
  }
}

}








