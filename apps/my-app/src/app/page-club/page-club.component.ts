import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-club',
  templateUrl: './page-club.component.html',
  styleUrls: ['./page-club.component.css']
})
export class PageClubComponent implements OnInit {
  isAuth2= false;
  i=0
  publication2={"id2":0,"contenu2":""}
  
  addPub(event:Event)
  {
    var text=<HTMLInputElement> document.getElementById("zoneText2")
    this.publication2.id2=this.i
    this.publication2.contenu2=text.value;

    var div=<HTMLDivElement>document.getElementById("zoneAffichage2")
    div.innerHTML=div.innerHTML+` <br><div style="padding-left:130px;">
    <div class="card" style="width: 70rem;">
      <div class="card-body">
        <h5 class="card-title">${this.publication2.id2}</h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text" id="pub"> ${this.publication2.contenu2}</p>
      </div>
    </div>
  </div> <br>`

  this.i++;
  text.value=""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
