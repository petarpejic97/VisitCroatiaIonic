import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CreateEventService } from './create-event.service';
import { Router } from '@angular/router';
import{ AlertController } from '@ionic/angular' ;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  event: any;
  parametriSlanje: any;

  constructor(public _createEventServvice : CreateEventService,
    private router: Router,
    private alertController: AlertController ) { }

  ngOnInit() {
    this.event = {
      'name': "",
      'location':"",
      'type':"",
      'dateStart': new Date(),
      'time': new Date()
    }
  }
  createEvent(){
    this.parametriSlanje={
      'name':this.event.name,
      'dateStart':this.event.dateStart,
      'location':this.event.location,
      'type':this.event.type,
      'createdBy':localStorage.getItem("ime")
    }
    this.parametriSlanje.dateStart=moment(this.parametriSlanje.dateStart).format("YYYY-MM-DDTHH:mm:00.000");
    this.checkFields();
  }
  checkFields()
  {
    if(this.event.name === "" || this.event.location === "" ||this.event.type === "" )
    {
      this.emptyAlert()
    }
    else{
      this._createEventServvice.createEvent(this.parametriSlanje).subscribe(res => {
      });
      location.reload();
      }
  }
  randomImg() {
    if(this.event.type === "Education")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782142/" style="height: 100%;object-fit: cover; width:100%"; >';
    
    else if(this.event.type === "Party")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782141/" style="height: 100%;object-fit: cover; width:100%"; >';
    
    else if(this.event.type=== "Film")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782136/" style="height: 100%;object-fit: cover; width:100%"; >';
    
    else if(this.event.type === "Music")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782134/" style="height: 100%;object-fit: cover; width:100%"; >';
   
    else if(this.event.type === "Show")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782129/" style="height: 100%;object-fit: cover; width:100%"; >';
    
    else if(this.event.type === "Art")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782125/" style="height: 100%;object-fit: cover; width:100%"; >';
   
    else if(this.event.type=== "Cultural manifestation")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782123/" style="height: 100%;object-fit: cover; width:100%"; >';
   
    else if(this.event.type === "Business")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782120/" style="height: 100%;object-fit: cover; width:100%"; >';

    else if(this.event.type=== "Sport")
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/collection/6782119/" style="height: 100%;object-fit: cover; width:100%"; >';
    
    else 
    document.getElementById('typeImage').innerHTML = '<img src="https://source.unsplash.com/random" style="height: 100%;object-fit: cover; width:100%"; >';
  }
  backonlist(){
    this.router.navigate(['citylist'])
  }
  async emptyAlert(){
    const alert = await this.alertController.create({
      header:'Alert',
      message: 'Some fields are empty!',
      buttons:['Close']
    });
    await alert.present();
  }
}
