import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaHubComponent } from './media-hub.component';
import { MediaHubRoutingModule } from './media-hub-routing.module';

@NgModule({
  declarations: [MediaHubComponent],
  imports: [
    CommonModule,
    MediaHubRoutingModule
  ]
})
export class MediaHubModule { } 