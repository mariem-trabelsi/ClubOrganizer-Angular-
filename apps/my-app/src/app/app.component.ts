import { Component,OnInit } from '@angular/core';
import { InscritService } from './services/inscrit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private inscritService: InscritService){


  }
  ngOnInit(){
    
    
  }
}
