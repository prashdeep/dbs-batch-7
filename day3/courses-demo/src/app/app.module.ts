import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { CoursesModule } from './courses/courses.module';
import { DBSFormsModule } from './forms/forms.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    CoursesModule,
    DBSFormsModule,
    PipesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
