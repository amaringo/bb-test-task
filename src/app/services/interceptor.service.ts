import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {MockData} from "../consts/mocks";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private clientListMock = MockData.clientsMock;

  private clientDetailMock = MockData.clientDetailsMockData;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url.split('/').at(-1);

    if (url === 'clients') {
      return of(new HttpResponse({status: 200, body: this.clientListMock}));
    }

    if (url?.match(/[1-9]*$/)) {
      return of(new HttpResponse({status: 200, body: this.clientDetailMock}));
    }

    if (url === 'changephone') {
      return of(new HttpResponse({status: 200}));
    }

    return next.handle(req);
  }
}
