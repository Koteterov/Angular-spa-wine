import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { MessageBusService, MessageType } from './services/message-bus.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private messageBus: MessageBusService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      this.messageBus.notify({
        text: err?.error?.message || "An error has occurred!",
        type: MessageType.Error
      })
      return throwError(() => err);
    }))
  }
}


