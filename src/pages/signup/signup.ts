import { SpecialtyPage } from '../specialty/specialty';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData: any;
  userData = { "name": "","role": "", "phone": "", "password": "", "username": "", "gender": "" };
  todo: FormGroup;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public authService: AuthService, public loadingController: LoadingController) {
    this.todo = new FormGroup({
      phone: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      location: new FormControl("", []),
        role: new FormControl("", []),
      username: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),

    });


  }

  signup() {
    let loader = this.loadingController.create({
      content: "Loading..."
    });

    loader.present();
    this.authService.postData(this.userData, 'signup.php').then((result) => {

      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.status == 1) {
   
        loader.dismiss();
        if (this.userData.role == "Patient") {
         
          this.navCtrl.push(LoginPage);  
        }
        if (this.userData.role == "Doctor") {
          let username = localStorage.setItem('username', this.userData.username);
          this.navCtrl.push(SpecialtyPage);
        }
      }
      else { console.log("User already exists"); }
    }, (err) => {
      // Error log
    });

  }
 

}