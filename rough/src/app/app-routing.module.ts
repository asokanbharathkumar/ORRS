import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PnrComponent } from './pnr/pnr.component';


const routes: Routes = [
  {path:"pnr",component:PnrComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
