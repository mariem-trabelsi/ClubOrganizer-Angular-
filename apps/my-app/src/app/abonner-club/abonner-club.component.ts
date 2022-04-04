import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-abonner-club',
  templateUrl: './abonner-club.component.html',
  styleUrls: ['./abonner-club.component.css']
})
export class AbonnerClubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit3(form: NgForm){
    const nomprenom=form.value['nomprenom'];
    const pass=form.value['pwd'];
    const text=form.value['objectif']
    console.log(nomprenom,pass,text);
    
  
  }

}
