import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TemplateDrivenComponent } from './feature-one/template-driven/template-driven.component';

export class CanDeactivateGuard implements CanDeactivate<TemplateDrivenComponent> {
    canDeactivate(component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot):  boolean {
        if(component.templateform.dirty){
            return confirm('Do you really want t oexit without changes..')
        }
    }
}