import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImporeSortPipe } from './impore-sort.pipe';
import { NamePipe } from './name.pipe';
import { PureSortPipe } from './pure-sort.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ImporeSortPipe,
    NamePipe,
    PureSortPipe
  ]
})
export class PipesModule { }
