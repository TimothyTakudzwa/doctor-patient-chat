import { AppointmentPage } from '../appointment/appointment';
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Observable } from 'rxjs/Rx';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import  { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
  public objects: any;
  status: any;
  upvotes: any;
  downvotes: any;
  user_id: any;
  color: any;
  responseData2: any;
  case_id: any;
  userData = {
    "id": "", "increment": "", "user_id": "",
  };
  userData2 = {
    "user_id": ""
  };
  responseData: any;
  results: any;
  name: any;
  constructor(public toastCtrl: ToastController, public loadingController: LoadingController, public navCtrl: NavController, public authService: AuthService, public http: Http, private popoverCtrl: PopoverController) {
    window.addEventListener("contextmenu", (e) => { e.preventDefault(); });
    this.objects = null;
    this.status = 1;
    this.color = "secondary";
  
    let loader = this.loadingController.create({
      content: "Getting List of doctors"
    });
    loader.present();
    this.http.get('http://www.houseofsmiles.co.zw/nine11/api/hit200/doctors.php')
      .map(res => res.json())
      .subscribe(data => {
        
        loader.dismiss();
        this.objects = data;

      });


  };
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Like Successful',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  presentToast2() {
    let toast = this.toastCtrl.create({
      message: 'You already liked this post',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  
  book(user:any) {
    console.log(user);
    let doc = localStorage.setItem('doc', user);
    this.navCtrl.push(AppointmentPage);
  }
 

}

