import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SousCategorieService } from 'src/app/services/sous-categorie.service';
@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent {
  formdata = {
    sous_categories:'',
    categorie_id :'',
  }

  souscategories: any[] = [];
souscategorie: any;
;
  constructor(private router: Router, private SousCategorieService: SousCategorieService) { }

  ngOnInit(): void {
    this.listesouscategorie();
  }

  listesouscategorie() {
    this.SousCategorieService.getsouscategorie().subscribe((reponse) => {
      this.souscategories = reponse.sousCategories
      console.log(this.souscategorie, 'souscategorie')

      // console.log(typeof(reponse),'fdfzffz');
      
    })
  }
  // méthode pour ajouter sous-catégorie
    ajoutsouscategorie(){
      let formdata = new FormData();
  formdata.set('titre',this.souscategorie);
  
  this.SousCategorieService.addsouscategorie(formdata).subscribe(
    (reponse: any) => {
      console.log("Ajout sous-catégorie réussi", reponse);
    },
    (error) => {
      console.error("Erreur lors de l'ajout:", error);
    }
  );
    }

    // méthode pour la modification
modifiersousCategorie(CategorieId: string): void {
  const categorieToUpdate = {
    titre: this.formdata.sous_categories,
    // Autres champs à mettre à jour si nécessaire
  };

  this.SousCategorieService.updatesouscategorie(CategorieId, categorieToUpdate).subscribe(
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
  // Demander une confirmation avant de supprimer la catégorie
  const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");
  if (confirmation) {
    this.SousCategorieService.deletesouscategorie(CategorieId).subscribe(
      (data: any) => {
        console.log("Suppression réussie", data);
        // Actualiser les données
      },
      (error) => {
        console.error("Erreur lors de la suppression:", error);
      }
    );
  }
}
}
