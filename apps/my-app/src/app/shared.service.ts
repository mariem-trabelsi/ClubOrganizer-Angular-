import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject=new Subject<any>();
  value:any;

  sendClickEvent()
  {
    this.subject.next(this.value)
  }
  getClickEvent():Observable<any>
  {
    return this.subject.asObservable();
  }
}
