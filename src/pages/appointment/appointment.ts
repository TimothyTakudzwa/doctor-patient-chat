import { DoctorPage } from '../doctor/doctor';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  user_name: any;
  responseData: any;
  doctor : any;
  user_id: any;
  todo: FormGroup;
  userData = { "name": "", "date": "", "user": "", "time": "" };
 
  constructor(public formBuilder: FormBuilder,public navCtrl: NavController, public alertCtrl: AlertController, public authService: AuthService, public loadingController: LoadingController) {
   
    this.todo = new FormGroup({
      date: new FormControl("", [Validators.required]),
      time: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
    
    });
  }

  ionViewDidLoad() {
   this.doctor = localStorage.getItem('doc');
  }

  request(){
    let loader = this.loadingController.create({
      content: "Loading..."
    });
    this.userData.name = this.doctor;
    this.userData.user = localStorage.getItem('logged');
    loader.present();

    this.authService.postData(this.userData, 'schedule.php').then((result) => {

      this.responseData = result;


      this.responseData = result;
      if (this.responseData.status == 0) {

        loader.dismiss();

        this.showAlert();
      }
      else {
        loader.dismiss();
        this.showAlert2();

       
          this.navCtrl.push(HomePage);
        

      }
    }, (err) => {
      // Error log
    });

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Unfortunately you cannot schedule an apointment at this time, Please try another time',
      buttons: [
        {
          text: 'OK',
          handler: data => {

            console.log('Cancel clicked');
          }
        }

      ]
    });
    alert.present();
  }
  showAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Thank you for your time, You appointment has been sheduled on :' + this.responseData.start_time,
      buttons: [
        {
          text: 'Retry',
          handler: data => {

            console.log('Cancel clicked');
          }
        }

      ]
    });
    alert.present();
  }

}
