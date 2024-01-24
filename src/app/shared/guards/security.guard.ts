import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {inject} from "@angular/core";
import {SecurityService} from "../services/security.service";

export const isAuthenticated: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<true | UrlTree> => {
  const router = inject(Router);
  return inject(SecurityService).user$
    .pipe(
      map((user) => user.isAuthenticated() || router.parseUrl('login'))
    );
}
