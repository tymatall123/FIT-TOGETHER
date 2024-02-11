import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './interface-User/acceuil/acceuil.component';
import { ContactComponent } from './interface-User/contact/contact.component';
import { ServiceComponent } from './interface-User/service/service.component';
import { AboutUsComponent } from './interface-User/about-us/about-us.component';
import { PostComponent } from './interface-User/post/post.component';
import { AcceuilAdminComponent } from './dasboard-coach/acceuil-admin/acceuil-admin.component';
import { GestionCategorieComponent } from './dashboard-Admin/gestion-categorie/gestion-categorie.component';
import { GestionCoachComponent } from './dashboard-Admin/gestion-coach/gestion-coach.component';
import { GestionVideoComponent } from './dasboard-coach/gestion-video/gestion-video.component';
import { GestionPostComponent } from './dasboard-coach/gestion-post/gestion-post.component';
import { SousCategorieComponent } from './dashboard-Admin/sous-categorie/sous-categorie.component';
import { AdminAcceuilComponent } from './dashboard-Admin/admin-acceuil/admin-acceuil.component';
import { LoginComponent } from './login/login/login.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';

const routes: Routes = [
  {path:'',redirectTo: 'connexion' , pathMatch:'full',},
  // routes pour utilisateur
  { path: 'Acceuil', component:AcceuilComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'service', component:ServiceComponent },
  { path: 'about-us', component:AboutUsComponent },
  { path: 'post', component:PostComponent},
  { path: 'login', component:LoginComponent},
  { path: 'inscription', component:InscriptionComponent},


  // route pour l'admin
  { path: 'admin', component:AcceuilAdminComponent},
  { path: 'categorie', component:GestionCategorieComponent },
  { path: 'coach', component:GestionCoachComponent },
  { path: 'video', component:GestionVideoComponent },
  { path: 'post-admin', component:GestionPostComponent },
  { path: 'sous-categorie', component:SousCategorieComponent },
  { path: 'adminG', component:AdminAcceuilComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
