import { AssignedPage } from '../assigned/assigned';
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user_name: any;
  responseData: any;
  user_id: any;
  userData = { "username": "", "password": "" };
  todo: FormGroup;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public alertCtrl: AlertController, public authService: AuthService, public loadingController: LoadingController) {
    this.todo = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });

  }



  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: 'Invalid Username/Password',
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

  login() {
    let loader = this.loadingController.create({
      content: "Loading..."
    });
    loader.present();
    this.authService.postData(this.userData, 'login.php').then((result) => {

      this.responseData = result;
      
let logged = localStorage.setItem('logged', this.responseData.name);
      this.responseData = result;
      if (this.responseData.status_message == null) {

        loader.dismiss();

        this.showAlert();
      }
      else {
        loader.dismiss();
        this.user_id = this.responseData.user_id;

        console.log(this.user_id);
        let userID = localStorage.setItem('userID', this.user_id);

        let userName = localStorage.setItem('userName', this.responseData.status_message);

        console.log(this.user_name);

        if (this.responseData.role == "Doctor"){
          this.navCtrl.push(AssignedPage);
        }
        if (this.responseData.role == "Patient") {
          this.navCtrl.push(HomePage);
        };
        
      }
    }, (err) => {
      // Error log
    });

  }
  signup() {
    this.navCtrl.push(SignupPage);
  }

}

