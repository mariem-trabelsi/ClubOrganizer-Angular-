import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InscritService } from '../services/inscrit.service';

@Component({
  selector: 'app-inscrire-site',
  templateUrl: './inscrire-site.component.html',
  styleUrls: ['./inscrire-site.component.css']
})
export class InscrireSiteComponent implements OnInit {

  constructor(private inscritService:InscritService) { }

  ngOnInit(): void {
  }

onSubmit(form: NgForm){
  const name =form.value['name'];
  const prenom=form.value['prenom'];
  const mail=form.value['mail'];
  const pass=form.value['pass'];
  console.log(name,prenom,mail,pass);


}
}
