import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { AddtrainsComponent } from './addtrains/addtrains.component';
import { UpdatetrainsComponent } from './updatetrains/updatetrains.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    AddtrainsComponent,
    UpdatetrainsComponent,
    HomeComponent,
    ReservationComponent,
    DetailsComponent,
    AdminComponent,
    ScheduleComponent,
    ContactComponent,
    LoginComponent,
    UserloginComponent,
    RegisteruserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

