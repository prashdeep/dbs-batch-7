import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerComponent } from './player/player.component';
import { EmployeesComponent } from './employees/employees.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PureSortPipe } from './pure-sort.pipe';
import { ImporeSortPipe } from './impore-sort.pipe';
import { SortDigitsComponent } from './sort-digits/sort-digits.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test/test.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FormatInputComponent } from './format-input/format-input.component';
import { FormatPhoneDirective } from './format-phone.directive';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { routes } from './routes';
import { UserAuthGuard } from './UserAuthGuard';
import { CanDeactivateGuard } from './CanDeactivateGuard';
import { AuthInterceptor } from './AuthInterceptor';
import { FeatureOneModule } from './feature-one/feature-one.module';
import { CourseModuleModule } from './course-module/course-module.module';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerComponent,
    EmployeesComponent,
    TwoWayComponent,
    NotFoundComponent,
    PureSortPipe,
    ImporeSortPipe,
    SortDigitsComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    HelloComponent,
    TestComponent,
    TooltipComponent,
    FormatInputComponent,
    FormatPhoneDirective
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FeatureOneModule,
    CourseModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserAuthGuard, 
    CanDeactivateGuard,
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:AuthInterceptor
    },{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
