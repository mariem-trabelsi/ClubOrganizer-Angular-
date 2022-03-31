import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-s-authentifier',
  templateUrl: './s-authentifier.component.html',
  styleUrls: ['./s-authentifier.component.css']
})
export class SAuthentifierComponent implements OnInit {

  constructor() { }
  onSubmit2(form: NgForm){
    const username =form.value['username'];
    const password=form.value['password'];
    
  
  }
  ngOnInit(): void {
  }

}
