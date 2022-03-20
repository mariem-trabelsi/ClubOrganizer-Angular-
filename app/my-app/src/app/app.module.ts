import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscrireSiteComponent } from './inscrire-site/inscrire-site.component';
import { AbonnerClubComponent } from './abonner-club/abonner-club.component';
import { CreerClubComponent } from './creer-club/creer-club.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscrireSiteComponent,
    AbonnerClubComponent,
    CreerClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
