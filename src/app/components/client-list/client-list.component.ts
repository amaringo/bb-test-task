import {Component, OnInit} from '@angular/core';
import {MockData} from "../../consts/mocks";
import {Router} from "@angular/router";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private router: Router, public store: StoreService) {
  }

  ngOnInit(): void {
    this.store.getClientList();
  }

  public goToClientPage(id: number): void {
    this.router.navigate([`client-page/${id}`]);
  }

}
