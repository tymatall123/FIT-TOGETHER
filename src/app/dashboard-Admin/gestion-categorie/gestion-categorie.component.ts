import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  formdata =  {
    categorie: '',
    
  }
  categories: any;

  constructor(private router:Router, private CategorieService : CategorieService){}

ngOnInit(): void {
  this.listecategorie();
}

listecategorie(){
this.CategorieService.getcategorie().subscribe((reponse:any)=>{
  console.log(reponse)
  this.categories=reponse.categorie
  console.log(this.categories)
})

}




}
