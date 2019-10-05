import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ModelDrivenComponent,
    TemplateDrivenComponent
  ]
})
export class DBSFormsModule { }
