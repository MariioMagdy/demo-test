import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EServicesComponent } from './e-services.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EServicesComponent }
];

@NgModule({
  declarations: [EServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EServicesModule { } 