import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import{ AlertController } from '@ionic/angular' ;

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.page.html',
  styleUrls: ['./citylist.page.scss'],
})
export class CitylistPage implements OnInit {

  constructor(public data:DataService,
    private router:Router,
    private alertController: AlertController) { }

  homelists:any;

  ngOnInit() {
      this.homelists=this.data.lists;
  }
  clickItem(item){
    localStorage.setItem("imegrada",item.itemname);
    this.router.navigate(['city',item.itemname])
  }
  openCreate(){
    if(localStorage.getItem('login') == 'no'){
      this.loginAlert();
    }
    else{
      this.router.navigate(['create-event'])
    }
  }
  logoff(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
  async loginAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'You can not create event. Please log in!',
      buttons:['Close']
    });
    await alert.present();
  }
}
