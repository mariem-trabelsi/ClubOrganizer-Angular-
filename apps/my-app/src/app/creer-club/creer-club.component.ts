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
  onSubmit4(form: NgForm){
    const nom=form.value['name'];
    const prenom=form.value['prenom'];
    const nomClub=form.value['nomClub'];
    const mail=form.value['mail'];
    const textarea=form.value['obj']
    console.log(nom,prenom,nomClub,mail,textarea);
    
  
  }
}
