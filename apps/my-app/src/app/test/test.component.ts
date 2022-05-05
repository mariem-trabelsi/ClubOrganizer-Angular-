import { Component, OnInit } from '@angular/core';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
pub:any={};
  constructor(public _PubService:PubService) {
    this._PubService.getAffiche().subscribe((data)=> 
   
    {
     this.pub =data.CLUB;
      
    }
    );
 
   }

  ngOnInit(): void {
  }

}
