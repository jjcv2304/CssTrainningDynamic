import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlexboxTrainingComponent} from './flexbox-training/flexbox-training.component';
import {HomeComponent} from './home/home.component';
import {SmacssComponent} from './smacss/smacss.component';

const routes: Routes = [
  { path: 'flexboxtraining', component: FlexboxTrainingComponent }
  , {path: 'home', component: HomeComponent}
  , {path: 'smacss', component: SmacssComponent}
  , { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
