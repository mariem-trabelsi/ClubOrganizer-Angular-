import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications=[];
  publication = {id:0, contenu:''};
  isAuth= false;
  pub="salut  !, vu la derniere ..."
  
  addPub(){
    if(this.publication.contenu != ''){

    this.publication.id=this.publications.length +1;
    this.publications.push()/*({
      id:this.publication.id,
      contenu:this.publication.contenu
    })*/;
   }
     this.publication.contenu='';
          }

  constructor() { }
  ngOnInit(): void {}

 
}

