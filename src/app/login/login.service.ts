import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers = new HttpHeaders();

  constructor(private _http: HttpClient) { }

  dohvatiKorisnika(a: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic' + btoa(a.email + ":" + a.pass)});
    let options = { headers: headers };
    return this._http.post('http://localhost:9000/user2s/login' , a, options).pipe();
  }
}
