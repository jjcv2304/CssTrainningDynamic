import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlexboxTrainingComponent} from './flexbox-training/flexbox-training.component';

const routes: Routes = [
  { path: 'flexboxtraining', component: FlexboxTrainingComponent }
  // ,{ path: '', redirectTo: '/flexboxtraining', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
