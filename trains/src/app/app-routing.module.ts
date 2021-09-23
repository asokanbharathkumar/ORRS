import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainComponent } from './train/train.component';
import { AddtrainsComponent } from './addtrains/addtrains.component';
import { UpdatetrainsComponent } from './updatetrains/updatetrains.component';

const routes: Routes = [
  {path:'Trains',component: TrainComponent},
  {path:'update/:id',component: UpdatetrainsComponent},
  {path:'add',component: AddtrainsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
