import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscrireSiteComponent } from './inscrire-site/inscrire-site.component';
import { AbonnerClubComponent } from './abonner-club/abonner-club.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscrireSiteComponent,
    AbonnerClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
