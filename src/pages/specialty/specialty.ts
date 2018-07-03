

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the SpecialtyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-specialty',
  templateUrl: 'specialty.html',
})
export class SpecialtyPage {
  responseData: any;
  username : any;
  userData = { "location": "", "specialty": "", "username": ""  };
  todo: FormGroup;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public authService: AuthService, public loadingController: LoadingController) {
    this.todo = new FormGroup({
      
      location: new FormControl("", []),
      specialty: new FormControl("", []),
      

    });
    this.userData.username = localStorage.getItem('username');

  }

  signup() {
    let loader = this.loadingController.create({
      content: "Loading..."
    });

    loader.present();
    this.authService.postData(this.userData, 'specialty.php').then((result) => {

      this.responseData = result;
      
     
      this.navCtrl.push(LoginPage);
      loader.dismiss();
    }, (err) => {
      // Error log
    });

  }


}