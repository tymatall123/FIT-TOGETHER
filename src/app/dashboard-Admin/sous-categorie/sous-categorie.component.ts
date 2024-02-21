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
  souscategorie: string = "";

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

  // méthode pour la modification
  
}
