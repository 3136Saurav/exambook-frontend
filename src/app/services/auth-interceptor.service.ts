import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req
    const token = this.loginService.getToken()

    let modifiedAuthReq = authReq;
    if (token != null) {
      modifiedAuthReq = authReq.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
    }

    return next.handle(modifiedAuthReq)
  }

}


