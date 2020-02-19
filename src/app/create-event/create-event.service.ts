import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  headers = new HttpHeaders();

  constructor(private _http: HttpClient) { }

  createEvent(a: any){
    return this._http.post('http://localhost:9000/' + 'event', a).pipe();
  }
}
