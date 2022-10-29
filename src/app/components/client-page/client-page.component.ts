import {Component, OnInit} from '@angular/core';
import {MockData} from "../../consts/mocks";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  public clientDetails = MockData.clientDetailsMockData;
  public client = MockData.clientsMock[0];
  public canEdit: boolean = false;
  public dialogVisibility: boolean = false;
  public clientForm: FormGroup | null = null;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      phoneNumber: [{value: this.clientDetails.phoneNumber, disabled: true}, Validators.required]
    });
  }

  public disablePhoneInput() {
    this.canEdit = false;
    this.clientForm?.controls['phoneNumber'].disable();
  }

  public enablePhoneInput() {
    this.canEdit = true;
    this.clientForm?.controls['phoneNumber'].enable();
  }

  public showModal() {
    this.dialogVisibility = true;
  }

  public changePhoneNumber() {
    //
  }
}
