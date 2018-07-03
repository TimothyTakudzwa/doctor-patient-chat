import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyappointmentsPage } from './myappointments';

@NgModule({
  declarations: [
    MyappointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyappointmentsPage),
  ],
})
export class MyappointmentsPageModule {}
