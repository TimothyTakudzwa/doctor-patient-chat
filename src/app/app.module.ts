import { MyappointmentsPage } from '../pages/myappointments/myappointments';
import { AppointPage } from '../pages/appoint/appoint';

import { AssignedPage } from '../pages/assigned/assigned';
import { AppointmentPage } from '../pages/appointment/appointment';
import { SpecialtyPageModule } from '../pages/specialty/specialty.module';
import { SpecialtyPage } from '../pages/specialty/specialty';
import { DoctorPage } from '../pages/doctor/doctor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import  { HttpModule }  from  '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage, SignupPage, AppointPage,
    ListPage, DoctorPage, SpecialtyPage, AppointmentPage, AssignedPage, MyappointmentsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage, SignupPage, AppointPage, MyappointmentsPage,
    ListPage, DoctorPage, SpecialtyPage, AppointmentPage, AssignedPage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
