import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:"userreg",component:RegisteruserComponent},
  {path:"userlogin",component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
