import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { FormsModule } from '../forms/forms.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavigationRoutingModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    FormsModule
  ]
})
export class NavigationModule { }
