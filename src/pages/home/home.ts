import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  slider =[
    {
      img:'../../assets/imgs/card1.png',
      title:'Mauris Pharetra nisl eget',
      content:'Lorem ipoum dolor site amet, consectetur adipiscing elit. Cras nec nunc urna Nunc vel consequat augue Donec gravida luctus justo, eu sagittis ipsum elementum aliquet.'
    },
    {
      img:'../../assets/imgs/card2.png',
      title:'Aliqqam eart volutpat',
      content:'Lorem ipoum dolor site amet, consectetur adipiscing elit. Cras nec nunc urna Nunc vel consequat augue Donec gravida luctus justo, eu sagittis ipsum elementum aliquet.'
    },
    {
      img:'../../assets/imgs/card3.png',
      title:' Aresh bimarst delivery',
      content:'Lorem ipoum dolor site amet, consectetur adipiscing elit. Cras nec nunc urna Nunc vel consequat augue Donec gravida luctus justo, eu sagittis ipsum elementum aliquet.'
    }
  ]

}
