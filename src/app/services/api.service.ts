import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URLs} from "../consts/urls";
import {Client, ClientDetails} from "../contracts/contracts";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getClientList(): Observable<Client[]> {
    return this.http.get<Client[]>(URLs.clients.clientList);
  }

  public getClientDetails(clientId: number): Observable<ClientDetails> {
    return this.http.get<ClientDetails>(URLs.clients.clientDetails(clientId));
  }

  public changePhoneNumber(clientId: number, phone: string): Observable<void> {
    return this.http.post<void>(URLs.clients.changePhone(clientId), {phone});
  }
}
