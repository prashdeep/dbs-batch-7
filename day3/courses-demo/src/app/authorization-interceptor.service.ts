import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptorService implements HttpInterceptor{

  constructor(private router:Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const user = localStorage.getItem('user');
    if (! user){
      //this.router.navigate(['/login'])
    }
    /*req = req.clone({
      setHeaders:{
        'Authorization':`Bearer ${JSON.parse(localStorage.getItem('user'))['token']}`
      }
    }

    )*/
  
    return next.handle(req);
  }
}
