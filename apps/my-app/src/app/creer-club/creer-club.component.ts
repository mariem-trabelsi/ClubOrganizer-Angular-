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
  onSubmit4(form: NgForm){
    const nom=form.value['name'];
    const prenom=form.value['prenom'];
    const nomClub=form.value['nomClub'];
    const mail=form.value['mail'];
    const textarea=form.value['obj']
    console.log(nom,prenom,nomClub,mail,textarea);
    
  
  }
}
