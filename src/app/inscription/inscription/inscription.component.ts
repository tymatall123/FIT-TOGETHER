import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  nom: string = "";
  prenom: string = "";
  // role: string = "hbj";
  email: string = "";
  password: string = "";
  // authService: any;
  route: any;
  register: any;


  constructor(private router:Router, private authService : AuthService){}

  ngOnInit() {
    this.inscription();
  }



  inscription() {
    if (this.nom == '' || this.prenom == '' || this.nom == '' || this.email == '' || this.password == '') {
      this.showMessage("error", "Oops", "Veuillez renseigner tous les champs");
    }
    else {
      const user = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,

      }

      // console.error(user);
      
      // console.log(user)
      this.authService.register(user).subscribe(
        (data) => {
          console.log("la reponse du service est :",data);
          
          this.showMessage('success', 'Felicitation', 'utilisateur inscris avec succés')
        }
      )
      this.router.navigate(['/connexion'])

    }
  }
  user(user: any) {
    throw new Error('Method not implemented.');
  }
  showMessage(icon:any, titre:any, text: any) {
    Swal.fire({
      icon:icon,
      title:titre,
      text:text
    })
    }

}
