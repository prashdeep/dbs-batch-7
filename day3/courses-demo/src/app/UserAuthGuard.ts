import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class UserAuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            console.log('came inside the can activate route guard')
            console.log(route.paramMap);
            console.log(state.url);
            const token = localStorage.getItem('token');
            if (token && token === 'authenticated'){
                return true;
            }
            confirm('You do not have sufficient rights to navigate..')
            return false;
    }

}