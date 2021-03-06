import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlexboxTrainingComponent } from './flexbox-training/flexbox-training.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SmacssComponent } from './smacss/smacss.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexboxTrainingComponent,
    HomeComponent,
    SmacssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
