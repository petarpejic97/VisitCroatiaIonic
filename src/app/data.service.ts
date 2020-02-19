import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

lists:any=[
  {
    itemname:'Zagreb',
    itemimg:'../assets/zagreb.jpg'
  },
  {
    itemname:'Split',
    itemimg:'../assets/split.jpg'
  },
  {
    itemname:'Vinkovci',
    itemimg:'../assets/zagreb.jpg'
  },
  {
    itemname:'Osijek'
  },
  {
    itemname:'Slavonski Brod'
  },
  {
    itemname:'Rijeka'
  },
  {
    itemname:'Zadar'
  },
  {
    itemname:'Pula'
  },
  {
    itemname:'Varaždin'
  },
  {
    itemname:'Vukovar'
  },
  {
    itemname:'Sisak'
  },
  {
    itemname:'Šibenik'
  },
  {
    itemname:'Dubrovnik'
  },
  {
    itemname:'Velika Gorica'
  },
  {
    itemname:'Bjelovar'
  },
  {
    itemname:'Koprivnica'
  },
  {
    itemname:'Đakovo'
  },
  {
    itemname:'Karlovac'
  },
  {
    itemname:'Kaštela'
  },
  {
    itemname:'Sesvete'
  }
]

  constructor() { }
}
