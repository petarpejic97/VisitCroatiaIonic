import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {

  constructor(private _http: HttpClient) { }

  dohvatiAktualne(){
    return this._http.get('http://localhost:9000/event/dohvatiAktualne').pipe();
  }
  dohvatiOdabrani(a : any){
    return this._http.put('http://localhost:9000/event/dohvatiOdabrani', a ).pipe();
  }
}
