import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  headers = new HttpHeaders();

  constructor(private _http: HttpClient) { }
  
  registrirajKorisnika(a: any){
    return this._http.post('http://localhost:9000/' + 'user2s', a).pipe();
  }
  
  dohvatiKorisnike(){
    return this._http.get('http://localhost:9000/user2s').pipe();
  }
}
