import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "../user.service";

@Injectable()
export class AttachHeadersInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const token = this.userService.retrieveData();

      if (token) {
        request = request.clone({
          setHeaders: {
            'X-Authorization': `${token.accessToken}`,
          }
        });
        return next.handle(request);
      }
    return next.handle(request);
  }
}
