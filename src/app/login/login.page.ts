import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import{ AlertController } from '@ionic/angular' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  korisnik = { email: '', password: '' };
  parametriSlanje: any;

  constructor(private router:Router,
    public _loginService:LoginService,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  dohvatiKorisnika(korisnik) {
    console.log(korisnik);
    this.parametriSlanje = {
      'email':korisnik.email, 
      'pass':korisnik.password
    }
    console.log(this.parametriSlanje);
     this._loginService.dohvatiKorisnika(this.parametriSlanje).subscribe(res => {
       console.log(res['success']);
       if(res['success']==true){
        localStorage.setItem("ime",res['rez'][0].name);
        this.router.navigate(['citylist'])
       }
       else {
        this.alert();
       }
     });
     localStorage.setItem("login","yes");
  }
  goToCityList(){
    this.router.navigate(['citylist'])
    localStorage.setItem("login","no");
  }
  goToRegister(){
    this.router.navigate(['registration'])
  }
  async alert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'Your login is wrong !',
      buttons:['Close']
    });
    await alert.present();
  }
}
