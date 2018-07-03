import { MyappointmentsPage } from '../myappointments/myappointments';
import { AppointPage } from '../appoint/appoint';

import { DoctorPage } from '../doctor/doctor';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
view(){
  this.navCtrl.push(DoctorPage);
}
appoint(){
 this.navCtrl.push(MyappointmentsPage);
}
}
