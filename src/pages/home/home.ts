import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {

  }

  ngOnInit(){
      const browser = this.iab.create('https://www.google.com.br/','_self',{location:'no',zoom:'no',closebuttoncaption:'no',EnableViewPortScale:'no'});
  }

}
