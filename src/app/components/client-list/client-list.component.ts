import {Component, OnInit} from '@angular/core';
import {MockData} from "../../consts/mocks";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clientsData = MockData.clientsMock;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public goToClientPage(id: number): void {
    this.router.navigate([`client-page/${id}`]);
  }


}
