import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaHubComponent } from './media-hub.component';

const routes: Routes = [{ path: '', component: MediaHubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaHubRoutingModule { } 