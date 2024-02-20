
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


  // nom: string="" ;
  // prenom: string ="";
  // role: string ="";
  // email: string ="";
  // password: string ="";
  // route: any;
  

  
    email :string= '';
    password : string= '';
  
 

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
    }

