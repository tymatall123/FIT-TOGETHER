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
import { SousCategorieComponent } from './dashboard-Admin/sous-categorie/sous-categorie.component';
import { AdminAcceuilComponent } from './dashboard-Admin/admin-acceuil/admin-acceuil.component';
import { LoginComponent } from './login/login/login.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { DetailVideoComponent } from './interface-User/detail-video/detail-video.component';
import { PostAdminComponent } from './dasboard-coach/post-admin/post-admin.component';
import { gardeAdminGuard } from './garde-admin.guard';


const routes: Routes = [
  {path:'',redirectTo: 'Acceuil' , pathMatch:'full',},
  // routes pour utilisateur
  {path: 'connexion',component:LoginComponent},
  { path: 'Acceuil', component:AcceuilComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'service', component:ServiceComponent },
  { path: 'about-us', component:AboutUsComponent },
  { path: 'post', component:PostComponent},
  { path: 'inscription', component:InscriptionComponent},
   {path: 'detail' , component:DetailVideoComponent},
   {path: 'gestion-post' , component:PostAdminComponent, canActivate:[gardeAdminGuard]},



  // route pour l'admin
  { path: 'admin', component:AcceuilAdminComponent, canActivate:[gardeAdminGuard] } ,
  { path: 'categorie', component:GestionCategorieComponent, canActivate:[gardeAdminGuard] },
  { path: 'coach', component:GestionCoachComponent, canActivate:[gardeAdminGuard] },
  { path: 'video', component:GestionVideoComponent, canActivate:[gardeAdminGuard] },
  { path: 'sous-categorie', component:SousCategorieComponent, canActivate:[gardeAdminGuard] },
  { path: 'adminG', component:AdminAcceuilComponent, canActivate:[gardeAdminGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
