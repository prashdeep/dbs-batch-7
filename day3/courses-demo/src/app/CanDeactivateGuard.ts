import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export class CanDeactivateGuard implements CanDeactivate<TemplateDrivenComponent> {
    canDeactivate(component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot):  boolean {
        console.log('came inside he can deactive guard....')
        return confirm('Do you really want t oexit without changes..')
    }
}