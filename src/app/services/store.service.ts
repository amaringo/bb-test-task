import {Injectable} from '@angular/core';
import {BehaviorSubject, delay, first, map} from "rxjs";
import {Client, ClientDetails} from "../contracts/contracts";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public clientList$ = new BehaviorSubject<Array<Client> | null>(null);

  public clientDetails$ = new BehaviorSubject<ClientDetails | null>(null);

  constructor(private apiService: ApiService) {
  }

  public getClientList(): void {
    this.clientList$.next(null);
    this.apiService.getClientList()
      .pipe(
        delay(400),
        first()
      )
      .subscribe(client => {
        this.clientList$.next(client);
      });
  }

  public getClientDetails(id: number): void {
    this.clientDetails$.next(null);
    this.apiService.getClientDetails(id)
      .pipe(
        delay(400),
        first()
      )
      .subscribe(client => {
        this.clientDetails$.next(client);
      });
  }

  public changePhoneNumber(id: number, phone: string): void {
    this.apiService.changePhoneNumber(id, phone)
      .pipe(
        delay(500),
        first()
      )
      .subscribe();
  }
}
