import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Devices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var window: any;

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  public smses: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  getSMS(){
    if(window.SMS) window.SMS.listSMS({},data=>{
        setTimeout(()=>{
            console.log(data);
            this.smses=data;
        },0)
 
    },error=>{
      console.log(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

}
