
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfilComponent } from './configuration/profil/profil.component';
import { UserComponent } from './configuration/user/user.component';
  
import { LivraisonComponent } from './produit/livraison/livraison.component';
import { ProduitComponent } from './produit/produit.component';
import { ScriptsComponent } from './produit/scripts/scripts.component';
import { RegisterComponent } from './register/register.component';
import { NotificationComponent } from './notification/notification.component';
import { TestComponent } from './produit/test/test.component';
import { AutGardGuard } from './Shared/aut-gard.guard';
import { HistoriqueComponent } from './historique/historique.component';
import { ProblemComponent } from './problem/problem.component';
import { LoginComponent } from './login/login.component';
import { SidBarComponent } from './sid-bar/sid-bar.component';
import { ActulatiteComponent } from './actulatite/actulatite.component';
import { AjoutStadeComponent } from './ajout-stade/ajout-stade.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { AjoutMatchComponent } from './ajout-match/ajout-match.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { SystemjeuxComponent } from './systemjeux/systemjeux.component';
import { AjoutArtikelComponent } from './ajout-artikel/ajout-artikel.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { AjoutLigueComponent } from './ajout-ligue/ajout-ligue.component';
import { AjoutMarqueComponent } from './ajout-marque/ajout-marque.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { MotPassOblierComponent } from './mot-pass-oblier/mot-pass-oblier.component';
import { ValidEmailComponent } from './valid-email/valid-email.component';
import { ValidPasswordComponent } from './valid-password/valid-password.component';
import { FormationComponent } from './formation/formation.component';
import { ExerciceComponent } from './exercice/exercice.component';

 
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'login',component:LoginComponent } ,
  {path:'register',component:RegisterComponent },
  {path:'sidbar',component:SidBarComponent },
  {path:'validemail/:id',component:ValidEmailComponent },
  {path:'validpassword/:id',component:ValidPasswordComponent },

  {path:'calendar',component:CalendarComponent ,canActivate: [AutGardGuard]},
  {path:'user',component:UserComponent ,canActivate: [AutGardGuard] },
  {path:'actulatite',component:ActulatiteComponent ,canActivate: [AutGardGuard] },
  {path:'profil',component:ProfilComponent  ,canActivate: [AutGardGuard]},
  {path:'ajoutstade',component:AjoutStadeComponent,canActivate: [AutGardGuard] },
  {path:'ajoutequipe',component:AjoutEquipeComponent,canActivate: [AutGardGuard] },
  {path:'ajoutLigue',component:AjoutLigueComponent,canActivate: [AutGardGuard] }, 
  {path:'marque',component:AjoutMarqueComponent,canActivate: [AutGardGuard] },
  {path:'categorie',component:AjoutCategorieComponent,canActivate: [AutGardGuard] },

  {path:'ajoutproduit',component:AjoutProduitComponent ,canActivate: [AutGardGuard]},
   {path:'ajoutmatch',component:AjoutMatchComponent,canActivate: [AutGardGuard]},
  {path:'notif',component:NotificationComponent },
 {path:'sestemjeux',component:SystemjeuxComponent ,canActivate: [AutGardGuard]},
 {path:'ajoutactulatite',component:AjoutArtikelComponent ,canActivate: [AutGardGuard]},

 {path:'formation',component:FormationComponent ,canActivate: [AutGardGuard]},
 {path:'exercice',component:ExerciceComponent ,canActivate: [AutGardGuard]},

 {path:'forgetpassword',component:MotPassOblierComponent },

 {path:'gestionusers',component:GestionUsersComponent,canActivate: [AutGardGuard]},
 
  //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
