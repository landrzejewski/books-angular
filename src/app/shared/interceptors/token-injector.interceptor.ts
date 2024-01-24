import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {SecurityService} from "../services/security.service";

export const tokenInjectorInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, handler: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const token = inject(SecurityService)?.lastUser.getToken();
  let finalRequest = request;
  if (token) {
    finalRequest = request.clone({
      headers: request.headers.set('Authorization', `bearer ${token}`)
    });
  }
  return handler(finalRequest);
}
