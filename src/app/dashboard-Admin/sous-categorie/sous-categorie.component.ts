import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SousCategorieService } from 'src/app/services/sous-categorie.service';
@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent {

souscategories: any[] = [];
cat_id:any;
souscategorie:any;



constructor(private router: Router, private SousCategorieService: SousCategorieService) { }

ngOnInit(): void {
  this.listesouscategorie();
}

listesouscategorie() {
  this.SousCategorieService.getsouscategorie().subscribe((reponse) => {
    this.souscategories = reponse.data;
    console.log(this.souscategories, 'sous_categorie');
  });
}
  // méthode pour ajouter sous-catégorie
  

  ajoutsouscategorie(){
   const data = {
    "sous_categorie": this.souscategorie,
    "categorie_id":parseInt(this.cat_id)
    
  }

  console.log(data);
  
this.SousCategorieService.addsouscategorie(data).subscribe(
  (reponse) => {
    console.log("Ajout catégorie réussi", reponse);
    this.listesouscategorie();
  },
  (error) => {
    console.error("Erreur lors de l'ajout:", error);
  }
);
  }

  showMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  scategorie:any;
 chargeInfo(souscat:any){
  this.scategorie=souscat;
  this.souscategorie=this.scategorie.sous_categorie;
  // this.souscategorie=souscat;
  this.cat_id=this.scategorie.categorie_id.id;

 }
  
// méthode pour la modification
modifierCategorie(): void {
  const souscategorieToUpdate = {   "sous_categorie":this.souscategorie , "categorie_id":this.cat_id};
 
 
  console.log(souscategorieToUpdate)
  this.SousCategorieService.editsouscategorie(this.scategorie.id, souscategorieToUpdate).subscribe(
    (data: any) => {
      console.log("Modification réussie", data);
      window.location.reload();
    },
    (error) => {
      console.error("Erreur lors de la modification:", error);
    }
  );
}
  // méthode pour la suppression
  
  supprimersousCategorie(id:string): void {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");
    if (confirmation) {
      this.SousCategorieService.deletesouscategorie(id).subscribe(
        (data: any) => {
          console.log("Suppression réussie", data);
          this.listesouscategorie();
          // Actualiser les données
        },
        (error) => {
          console.error("Erreur lors de la suppression:", error);
        }
      );
    }
  }
}
