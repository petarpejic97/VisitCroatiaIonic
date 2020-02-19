import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitor,Plugins,GeolocationPosition}from '@capacitor/core'
import * as moment from 'moment';


import { LoadingController,AlertController } from '@ionic/angular'
import { Button } from 'protractor';

const { Toast,Geolocation }=Capacitor.Plugins;

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  dateStart: any;

  constructor(private router:Router) { }

  ngOnInit() {
         
    if(localStorage.getItem('imegrada')=="Zagreb"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/zagreb.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177891.77679800315!2d15.824247747527428!3d45.840110363185005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1shr!2shr!4v1563272560795!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Vinkovci"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/vinkovci.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89861.00377397386!2d18.721601697507907!3d45.26484979624416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8a8883c30259%3A0x400ad50862bceb0!2sVinkovci!5e0!3m2!1shr!2shr!4v1563272530069!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Split"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/split.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46293.534612368225!2d16.414064046926292!3d43.515978856163564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfc6bbcf517%3A0xa1798ff631b49f98!2s21000%2C+Split!5e0!3m2!1shr!2shr!4v1563272966330!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Osijek"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/osijek.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89414.38679508553!2d18.61881895805194!3d45.54631039922781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a869728075%3A0x5b8c725621a41195!2sOsijek!5e0!3m2!1shr!2shr!4v1563273624235!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Rijeka"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/rijeka.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89729.93986119285!2d14.356774100602264!3d45.34758854690683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a12517aabe2d%3A0x373c6f383dcbb670!2sRijeka!5e0!3m2!1shr!2shr!4v1563273649609!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Zadar"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/zadar.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91632.00016807318!2d15.178864289044459!3d44.13493425514297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa62d2c0b88f%3A0x12323e1c13f40784!2sZadar!5e0!3m2!1shr!2shr!4v1563273559057!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Bjelovar"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/bjelovar.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44423.505632718254!2d16.803394965451556!3d45.90193015917571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47663604df4f7fdd%3A0x400ad50862bbfb0!2sBjelovar!5e0!3m2!1shr!2shr!4v1565177557103!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Đakovo"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/dakovo.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44893.45499674273!2d18.38255596445669!3d45.31163864933812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c559529c51793%3A0x63a49953f47ddb1e!2zxJBha292bw!5e0!3m2!1shr!2shr!4v1565177684529!5m2!1shr!2shr"  width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Koprivnica"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/koprivnica.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44210.486319292686!2d16.786181420879675!3d46.1675623034669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476627031a318147%3A0xbe043a049b25af09!2sKoprivnica!5e0!3m2!1shr!2shr!4v1565177761434!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Pula"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/pula.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63971.08952002805!2d13.815149215884594!3d44.87960748643282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd2de09337b6d%3A0x72324a3a7b4e580d!2sPula!5e0!3m2!1shr!2shr!4v1565177901675!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Šibenik"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/sibenik.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46120.10576638988!2d15.85242735291686!3d43.741575504179764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352615d088d09d%3A0x400ad50862bcc20!2zxaBpYmVuaWs!5e0!3m2!1shr!2shr!4v1565177952562!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Sisak"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/sisak.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44761.73096405238!2d16.35861995908042!3d45.47769622091689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766e5306f2ca433%3A0x400ad50862bbab0!2sSisak!5e0!3m2!1shr!2shr!4v1565177996315!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Slavonski Brod"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/slavbrod.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45014.20568078184!2d17.96350251332094!3d45.158995299103566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475dba0125e6cc57%3A0xa99cb4401b060ad5!2sSlavonski+Brod!5e0!3m2!1shr!2shr!4v1565178054874!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Velika Gorica"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/velikagorica.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63053.72101960371!2d16.017824159149296!3d45.69885615401631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766876780b60347%3A0x400ad50862bb790!2sVelika+Gorica!5e0!3m2!1shr!2shr!4v1565178142049!5m2!1shr!2shr"  width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Vukovar"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/vukovar.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75457.14742504685!2d18.9487508167525!3d45.34491580495508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c8f9a2e477a6b%3A0xb6de633cd7e8cfab!2sVukovar!5e0!3m2!1shr!2shr!4v1565178556140!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Varaždin"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/varazdin.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52439.05552426542!2d16.31710092669581!3d46.31006860205365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768aacffc31037d%3A0xdbfa9eea855fd6d9!2zVmFyYcW-ZGlu!5e0!3m2!1shr!2shr!4v1565178234384!5m2!1shr!2shr" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Kaštela"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/kastela.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32715.14004599242!2d16.36274390794441!3d43.55160459963813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355d02eae40ef1%3A0xe07d3afbebb1353f!2zMjEyMTQsIEthxaF0ZWxh!5e0!3m2!1shr!2shr!4v1565178331371!5m2!1shr!2shr"  width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Dubrovnik"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/dubrovnik.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23477.888193572115!2d18.076537680937125!3d42.64575586678503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b8ba20835e87d%3A0x400ad50862bd500!2sDubrovnik!5e0!3m2!1shr!2shr!4v1565178368366!5m2!1shr!2shr"  width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Karlovac"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/karlovac.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89500.43592776016!2d15.489537609559248!3d45.49218754874026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47642331b9df2dc1%3A0x400ad50862bbb70!2sKarlovac!5e0!3m2!1shr!2shr!4v1565178389733!5m2!1shr!2shr"  width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    else if(localStorage.getItem('imegrada')=="Sesvete"){
      document.getElementById("cityimage").innerHTML= '<img src="../assets/cities/sesvete.jpg">';
      document.getElementById("title").innerHTML=localStorage.getItem('imegrada');
      document.getElementById("map-wrapper").innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44493.883829046004!2d16.105289068214645!3d45.813907151182086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676e40be49033%3A0x500ad50862bd8a0!2sSesvete!5e0!3m2!1shr!2shr!4v1565178411832!5m2!1shr!2shr"  width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
  }

  allUpcoming(){
    localStorage.setItem("button","allUpcoming");
    this.router.navigate(['eventlist'])
  }
  chooseDate(){
    localStorage.setItem("dateStart",moment(this.dateStart).format("YYYY-MM-DDT00:00:00.000"));
    localStorage.setItem("searchDate",moment(this.dateStart).format("DD.MM.YYYY."));
    localStorage.setItem("button","chooseDate");
    this.router.navigate(['eventlist'])
  }

  backonlist(){
    console.log("sadasd")
    this.router.navigate(['citylist'])
  }
}
