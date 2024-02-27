
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email :string= '';
    password : string= '';
  passwordCon: string ='';
  emailCon: string='';
  nom: string ='';
  prenom: string='';



  constructor(private router:Router, private authservice : AuthService){}


  ngOnInit() {
    // this.connexion();
  }



  connexion() : void{
    
    const datainput = {
      email: this.email,
      password :this.password,
      
    }
    console.log("data", this.email)
   this.authservice.login(datainput).subscribe((response : any)=>{
    console.log("voir info", response)
    localStorage.setItem('token', response.Autorisation.Token )
    if(response.Autorisation.Token){
      console.log(response.Autorisation.User)
      this.showMessage('success', 'Felicitation','Bienvenu sur Fit-Together');
      if(response.Autorisation.User.role_id.role=='ROLE_USER'){   
        this.router.navigate(['/Acceuil'])
      }

    } 
    if(response.Autorisation.User.role_id.role=='ROLE_COACH'){  
      this.router.navigate(['/admin'])
    }
    if(response.Autorisation.User.role_id.role=='ROLE_ADMIN'){  
      this.router.navigate(['/adminG'])
    }
   })
   
}
// redirection des pages
 showMessage(icon:any, titre:any, text: any) {
    Swal.fire({
      icon:icon,
      title:titre,
      text:text
    })
    }
  // methode pour la déconnection

  logout(): void {
    // Effacer les informations de connexion 
    localStorage.removeItem('token');

    // Rediriger vers la page de connexion
    this.router.navigate(['/connexion']);
  }
  // Variables pour faire la vÃ©rifications
  
  verifEmail: String = '';
  verifPassword: String = '';

  // Variables si les champs sont exacts
  exactEmail: boolean = false;
  exactPassword: boolean = false;
  exactPasswordConf: boolean = false;

  // Pour vÃ©rifier les champs pour la connexion
  verifEmailCon: String = '';
  verifPasswordCon: String = '';

  // Variables Si les valeurs sont exactes
  exactEmailCon: boolean = false;
  exactPasswordCon: boolean = false;

 // Fonction de Verification du password pour la fonctionnalitÃ© connexion
  verifPasswordConFonction() {
    this.exactPasswordCon = false;
    if (this.password == '') {
      this.verifPasswordCon = '';
      // this.verifPasswordCon = 'Veuillez renseigner votre mot de passe';
    } if (this.passwordCon.length < 5) {
      this.verifPasswordCon = 'Mot de passe doit etre superieur a 5 caracteres';
    } else {
      this.verifPasswordCon = '';
      this.exactPasswordCon = true;
    }
  }
  // Fonction de Verification de l'email pour la fonctionnalitÃ© connexion
  verifEmailConFonction() {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmailCon = false;

    if (this.email == '') {
      // this.verifEmailCon = 'Veuillez renseigner votre email';
      this.verifEmailCon = '';
    }if (
      !this.email.match(emailPattern) ||
      !this.email.endsWith('@') ||
      !this.email.includes('.')
    ) {
      this.verifEmailCon = 'Veuillez donner un email valide';
    } else {
      this.verifEmailCon = '';
      this.exactEmailCon = true;
    }
  }

  // Verification de  l'email
  verifEmailFonction() {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmail = false;

    if (this.email == '') {
      this.verifEmail = '';
      // this.verifEmail = 'Veuillez renseigner votre email';
    }if (!this.email.match(emailPattern)) {
      this.verifEmail = 'Veuillez donner un email valide';
    } else {
      this.verifEmail = '';
      this.exactEmail = true;
    }
  }
  // Verification du mot de passe
  verifPasswordFonction() {
    this.exactPassword = false;
    if (this.password == '') {
      this.verifPassword = '';
      // this.verifPassword = 'Veuillez renseigner votre mot de passe';
    }if (this.password.length < 5) {
      this.verifPassword = 'Mot de passe doit Ãªtre supÃ©rieur ou Ã©gal Ã  5';
    } else {
      this.verifPassword = '';
      this.exactPassword = true;
    }
  }
    }

