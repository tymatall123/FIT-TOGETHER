import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './interface-User/acceuil/acceuil.component';
import { ServiceComponent } from './interface-User/service/service.component';
import { ContactComponent } from './interface-User/contact/contact.component';
import { AboutUsComponent } from './interface-User/about-us/about-us.component';
import { PostComponent } from './interface-User/post/post.component';
import { AcceuilAdminComponent } from './dasboard-coach/acceuil-admin/acceuil-admin.component';
import { GestionVideoComponent } from './dasboard-coach/gestion-video/gestion-video.component';
import { GestionPostComponent } from './dasboard-coach/gestion-post/gestion-post.component';
import { AdminAcceuilComponent } from './dashboard-Admin/admin-acceuil/admin-acceuil.component';
import { GestionCoachComponent } from './dashboard-Admin/gestion-coach/gestion-coach.component';
import { GestionCategorieComponent } from './dashboard-Admin/gestion-categorie/gestion-categorie.component';
import { SousCategorieComponent } from './dashboard-Admin/sous-categorie/sous-categorie.component';
import { LoginComponent } from './login/login/login.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { DetailVideoComponent } from './interface-User/detail-video/detail-video.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ServiceComponent,
    ContactComponent,
    AboutUsComponent,
    PostComponent,
    AcceuilAdminComponent,
    GestionVideoComponent,
    GestionPostComponent,
    AdminAcceuilComponent,
    GestionCoachComponent,
    GestionCategorieComponent,
    SousCategorieComponent,
    InscriptionComponent,
    DetailVideoComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
