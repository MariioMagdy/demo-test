import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { PartnersRoutingModule } from './partners-routing.module';

@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { } 