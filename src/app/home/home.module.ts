import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StartedComponent } from './components/started/started.component';
import { ShortenComponent } from './components/shorten/shorten.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    StartedComponent,
    ShortenComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class HomeModule { }
