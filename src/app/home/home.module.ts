import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StartedComponent } from './components/started/started.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    StartedComponent
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
