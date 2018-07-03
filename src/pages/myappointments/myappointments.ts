import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MyappointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myappointments',
  templateUrl: 'myappointments.html',
})
export class MyappointmentsPage {
  userData2 = {
    "user": "",
  };
  public objects: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public authService: AuthService, public navParams: NavParams, public loadingController: LoadingController) {


  }


  ionViewDidLoad() {
    this.load();
  }
  load() {
    let loader = this.loadingController.create({
      content: "Getting Your Appointments"
    });

    loader.present();

    this.userData2.user = localStorage.getItem('logged');
    this.authService.postData(this.userData2, 'myappointments.php').then((result) => {

      this.objects = result;

      loader.dismiss();


    });

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    this.load();
  }
}
