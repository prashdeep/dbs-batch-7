import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomerComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ]
})
export class FeatureOneModule { }
