import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { MostUsedServicesComponent } from './most-used-services/most-used-services.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    MostUsedServicesComponent,
    LatestNewsComponent,
    MediaCenterComponent,
    SubscribeSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { } 