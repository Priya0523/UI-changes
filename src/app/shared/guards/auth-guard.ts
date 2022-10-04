import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //If token data exist, user may login to application
        if (localStorage.getItem('token')) {
            return true;
        }
        // otherwise redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}


