import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StartedComponent } from './components/started/started.component';
import { ShortenComponent } from './components/shorten/shorten.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CardlinkComponent } from './components/cardlink/cardlink.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    StartedComponent,
    ShortenComponent,
    CardlinkComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
