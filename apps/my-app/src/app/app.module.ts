import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscrireSiteComponent } from './inscrire-site/inscrire-site.component';
import { AbonnerClubComponent } from './abonner-club/abonner-club.component';
import { CreerClubComponent } from './creer-club/creer-club.component';
import { SAuthentifierComponent } from './s-authentifier/s-authentifier.component';
import { CardsClubsComponent } from './cards-clubs/cards-clubs.component';

import {FormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ParametresComponent } from './parametres/parametres.component';
const appRoutes: Routes =[
  {path:'creerClub',component:CreerClubComponent},
  {path:'inscrireSite',component:InscrireSiteComponent},
  {path:'home',component:HomeComponent},
  {path:'clubsCards',component:CardsClubsComponent},
  {path:'sAuthentifier',component:SAuthentifierComponent},
  {path:'logo',component:LogoComponent},
  {path:'meetings',component:MeetingsComponent},
  {path:'parametres',component:ParametresComponent},
  {path:'abonnerClub',component:AbonnerClubComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscrireSiteComponent,
    AbonnerClubComponent,
    CreerClubComponent,
    SAuthentifierComponent,
    CardsClubsComponent,
    NavComponent,
    LogoComponent,
    MeetingsComponent,
    ParametresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
