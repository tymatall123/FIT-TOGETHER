import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { SousCategorieService } from 'src/app/services/sous-categorie.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent {

souscategories: any[] = [];
cat_id:any;
souscategorie:any;
  categories: any;



constructor(private router: Router, 
  private SousCategorieService: SousCategorieService,
  private CategorieService:CategorieService
  )
  
   { }

ngOnInit(): void {
  this.listesouscategorie();
  this.listecategorie();
}
 
listesouscategorie() {
  this.SousCategorieService.getsouscategorie().subscribe((reponse) => {
    this.souscategories = reponse.sousCategories;
    console.log(this.souscategories, 'sous_categorie');
  });
}
  // méthode pour ajouter sous-catégorie
  listecategorie() {
    this.CategorieService.getcategorie().subscribe((reponse) => {
      this.categories = reponse.Categories
      console.log(this.categories, 'categorie')

      // console.log(typeof(reponse),'fdfzffz');
      
    })
  }
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
if (this.souscategorie == ''|| this.cat_id =='' ) {
  this.showmessage("error", "Oops", "Veuillez renseigner tous les champs");
}else 
{ 
  this.showmessage('success',"reussi", "ajout ajouter avec succés" );
}
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
  const souscategorieToUpdate = {"sous_categorie":this.souscategorie , "categorie_id":this.cat_id};
 
 
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
  this.showmessage('success',"reussi", "ajout ajouter avec succés" );

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
  showmessage(icon:any, titre:any, text: any) {
    Swal.fire({
      icon:icon,
      title:titre,
      text:text
    })
    }
}
