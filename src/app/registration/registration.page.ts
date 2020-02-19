import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import{ AlertController } from '@ionic/angular' ;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  parametriSlanje: any;
  users:any;
  regKorisnik={name:'',phone:'',email:'',password:'',confPassword:''}
  flag: boolean=false;

  constructor(public _registrationService: RegistrationService,
    private router: Router,
    private alertController: AlertController ) { }

  ngOnInit() {
    this.parametriSlanje={
      'name':this.regKorisnik.name,
      'phoneNumber':this.regKorisnik.phone,
      'email':this.regKorisnik.email,
      'password':this.regKorisnik.password
    }
    console.log(this.flag)
  }
  checkNumber(){
    this._registrationService.dohvatiKorisnike().subscribe(res => {
      this.users=res;
      for (let user of this.users) {
        if(user.phoneNumber === this.regKorisnik.phone){
          console.log("ulazim u if")
          this.flag=true;
          this.phoneAlert();
        }
      }
    });
    console.log(this.flag)
  }
  checkEmail(){
    this._registrationService.dohvatiKorisnike().subscribe(res => {
      this.users=res;
      for (let user of this.users) {
        if(user.email === this.regKorisnik.email){
          console.log("ulazim u email")
          this.flag=true;
          this.emailAlert();
        }
      }
    });
    console.log(this.flag)
  }
  checkAgain(){
    this.checkEmail()
    this.checkNumber()
  }

  registration()
  {
    if(this.regKorisnik.password !== this.regKorisnik.confPassword){
      this.passwordAlert();
    }
    else if(this.regKorisnik.name == ''|| this.regKorisnik.phone == '' || 
    this.regKorisnik.email == '' || this.regKorisnik.password == ''||
     this.regKorisnik.confPassword == ''){
    this.emptyAlert();
    }
    else if(this.regKorisnik.password.length < 6){
      this.lenghtAlert();
    }
    else{
      this.parametriSlanje={
        'name':this.regKorisnik.name,
        'phoneNumber':this.regKorisnik.phone,
        'email':this.regKorisnik.email,
        'password':this.regKorisnik.password
      }
      this.registriraj();
    }
  }
  registriraj(){
    if(this.flag==true){
      this.alertExist()
      setTimeout(() => {
        location.reload();
      }, 3000); 
    }
    else{
      this._registrationService.registrirajKorisnika(this.parametriSlanje).subscribe(res => {
        console.log(res);
        if(res){
          this.router.navigate(['login'])
        }
      });
    }
  }
  backlogin(){
    this.router.navigate(['login'])
  }
  async passwordAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'Passwords are not matched!',
      buttons:['Close']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'Some fields are empty!',
      buttons:['Close']
    });
    await alert.present();
  }
  async emailAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'This email already exist!',
      buttons:['Close']
    });
    await alert.present();
  }
  async phoneAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'This phone number already exist!',
      buttons:['Close']
    });
    await alert.present();
  }
  async lenghtAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'Your password is too short!',
      buttons:['Close']
    });
    await alert.present();
  }
  async alertExist(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'Entered email or phone number already exist!'+'<br/>' +'Enter your data again.',
      buttons:['Close']
    });
    await alert.present();
  }
}
