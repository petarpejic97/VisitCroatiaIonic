import { Component, OnInit } from '@angular/core';
import { EventlistService } from './eventlist.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {

  cityName:any;

  events: any;
  eventsCity: any;

  eventObject:any;

  parametriSlanje:any;

  constructor(public _EventlistService: EventlistService,
    private router: Router) { }

  ngOnInit() {
    this.cityName=localStorage.getItem("grad")

    if(localStorage.getItem("button") == "chooseDate"){
      this.dohvatiEventeDatum();
      document.getElementById("headertitle").innerHTML=localStorage.getItem('searchDate');
    }
    else if (localStorage.getItem("button") == "allUpcoming")
    {
      this.dohvatiEvente();
    }
  }
  dohvatiEvente() {
    this._EventlistService.dohvatiAktualne().subscribe(res => {
      this.events = res['rezultat'];
      console.log(res['rezultat'])
      this.eventsCity = [];
      for (let event of this.events) {
        if (event.location === localStorage.getItem("imegrada")) {
          let eventCity = {
            'name': event.name,
            'id':event.id,
            'dateStart':moment(event.dateStart).format("DD.MM.YYYY."),
            'time':moment(event.dateStart).format("HH:mm"),
            'type':event.type
          };
          this.eventsCity.push(eventCity);
          console.log(this.eventsCity);
        }
      }
    });
  }
  dohvatiEventeDatum(){
    this.parametriSlanje={
      datum:localStorage.getItem("dateStart")
    }
    console.log(this.parametriSlanje.datum)
    this._EventlistService.dohvatiOdabrani(this.parametriSlanje).subscribe(res => {
      this.events = res['rezultat'];
      console.log(res['rezultat'])
      this.eventsCity = [];
      for (let event of this.events) {
        if (event.location === localStorage.getItem("imegrada")) {
          let eventCity = {
            'name': event.name,
            'id':event.id,
            'dateStart':moment(event.dateStart).format("DD.MM.YYYY."),
            'time':moment(event.dateStart).format("HH:mm"),
            'type':event.type
          };
          this.eventsCity.push(eventCity);
          console.log(this.eventsCity);
        }
      }
    });
  }
  backonlist(){
    console.log("sadasd")
    this.router.navigate(['city',localStorage.getItem("imegrada")])
  }
}
