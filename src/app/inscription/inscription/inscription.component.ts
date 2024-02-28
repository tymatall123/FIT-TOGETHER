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
  truthyTab: any;


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
    
  nomValidate() {
    let validationNom = document.getElementById('validationNom');

    const nomPrenomRegex = /^.{2,25}$/;
    if (nomPrenomRegex.test(this.nom)) {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'valide';
      validationNom!.classList.remove('error');
      validationNom!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.nom == true) == undefined) {
        this.truthyTab.push({ nom: true });
      }

    } else {
      // console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML = 'invalide';
      validationNom!.classList.remove('success');
      validationNom!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.nom == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.nom == true), 1);
      }
    }
    if (this.nom == "") {
      validationNom!.innerHTML = "";
    }
  }
  prenomValidate() {
    let validationPrenom = document.getElementById('validationPrenom');
    const nomPrenomRegex = /^.{2,25}$/;
    if (nomPrenomRegex.test(this.prenom)) {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
      if (this.truthyTab.find((value: any) => value.prenom == true) == undefined) {
        this.truthyTab.push({ prenom: true });
      }
    } else {
      // console.log(nomPrenomRegex.test(this.prenom));
      validationPrenom!.innerHTML = 'invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
      if (this.truthyTab.find((value: any) => value.prenom == true) != undefined) {
        this.truthyTab.splice(this.truthyTab.findIndex((value: any) => value.prenom == true), 1);
      }
    }
    if (this.prenom == "") {
      validationPrenom!.innerHTML = "";
    }
  }
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
