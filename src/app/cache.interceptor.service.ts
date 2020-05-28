import { Injectable } from '@angular/core';
import { CachingService } from './cache.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: CachingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: CachingService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          cache.put(req, event);
        }
      })
    );
  }
}
