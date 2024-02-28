
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
  truthyTab: any;



  constructor(private router:Router, private authservice : AuthService){}


  ngOnInit() {
    // this.connexion();
  }



  connexion() : void{
    
    const datainput = {
      email: this.email,
      password :this.password,
    }
    if (this.email == '' || this.password == '') {
      this.showMessage("error", "Oops", "Veuillez renseigner tous les champs");
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

  // Fonction de Verification de l'email pour la fonctionnalitÃ© connexion
  emailValidate() {
    console.warn(this.email);
    let validationEmail = document.getElementById('validationEmail');
    const emailRegexGegin = /^[a-zA-Z]+[.a-z0-9]+@[a-z]+[.]{1}[a-z]{2,}$/;
    // const emailRegexEnd = /^[a-z]{2,}$/;
    // this.emailError = emailRegexGegin.test(this.email);
    if (emailRegexGegin.test(this.email)) {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'valide';
      validationEmail!.classList.remove('error');
      validationEmail!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.email_utilisateur == true) == undefined) {
        this.truthyTab.push({ email_utilisateur: true });
      }
      console.log(this.truthyTab);
    } else {
      // console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML = 'invalide';
      validationEmail!.classList.remove('success');
      validationEmail!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.email_utilisateur == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.email_utilisateur == true), 1);
      }

    }
    if (this.email == "") {
      validationEmail!.innerHTML = "";
    }
    // console.log(this.truthyTab);
  }
  // Verification du mot de passe
  passeValidate() {
    let validationPrenom = document.getElementById('validationPassword');
    const nomPrenomRegex = /^.{5,}$/;
    if (nomPrenomRegex.test(this.password)) {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value:any)=>value.password==true)==undefined) {
        this.truthyTab.push({password:true});
      }

    } else {
      // console.log(nomPrenomRegex.test(this.pass));
      validationPrenom!.innerHTML = 'invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value:any)=>value.password==true)!=undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value:any)=>value.password==true),1);
      }
    }
    if (this.password=="") {
      validationPrenom!.innerHTML="";
    }
    // console.log(this.truthyTab);
    // console.log(this.truthyTab.length);
  }
    }

