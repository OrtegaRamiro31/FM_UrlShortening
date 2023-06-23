import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StartedComponent } from './components/started/started.component';
import { ShortenComponent } from './components/shorten/shorten.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CardlinkComponent } from './components/cardlink/cardlink.component';
import {ClipboardModule} from "ngx-clipboard";
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    StartedComponent,
    ShortenComponent,
    CardlinkComponent,
    StatisticsComponent,
    StatisticComponent,
    FooterComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    ClipboardModule,
  ]
})
export class HomeModule { }
