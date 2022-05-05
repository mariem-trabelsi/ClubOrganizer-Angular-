import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(public _HttpClient:HttpClient) { }
  getAffiche(): Observable <any> {
return this._HttpClient.get("https://club-38e17-default-rtdb.europe-west1.firebasedatabase.app/AIzaSyBcvBdYIHgPfTTa0iidC0KjdfD4dw2aOmw");

  }
}