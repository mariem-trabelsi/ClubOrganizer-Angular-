import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-creer-club',
  templateUrl: './creer-club.component.html',
  styleUrls: ['./creer-club.component.css']
})
export class CreerClubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ajouterClub(event:Event){
  
    /*
    var text=<HTMLInputElement> document.getElementById("zoneText")
    

    var div=<HTMLDivElement>document.getElementById("zoneAffichage")
    div.innerHTML=div.innerHTML+` <br><div style="padding-left:130px;">
    <div class="card" style="width: 50rem;">
      <div class="card-body" style="border-radius:  4px;" >
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text" id="pub"></p>
      </div>
    </div>
  </div> <br>`*/


    
  }
  onSubmit4(formu: NgForm){
    const nom=formu.value['name'];
    const prenom=formu.value['prenom'];
    const nomClub=formu.value['nomClub'];
    const mail=formu.value['mail'];
    const textarea=formu.value['obj']
    console.log(nom,prenom,nomClub,mail,textarea);
    
  
  }
}
