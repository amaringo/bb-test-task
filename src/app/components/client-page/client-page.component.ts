import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../services/store.service';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../contracts/contracts';
import {map, Observable, of, Subject, takeUntil, tap} from 'rxjs';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPageComponent implements OnInit, OnDestroy {

  public unsubscriber$: Subject<void> = new Subject();

  public canEdit: boolean = false;

  public dialogVisibility: boolean = false;

  public clientForm: FormGroup | null = null;

  public selectedClientId: number = +this.route.snapshot.params['id'];

  public client$: Observable<Client | null> = of(null);


  constructor(private formBuilder: FormBuilder, public store: StoreService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      phoneNumber: [{value: '', disabled: true}, Validators.required]
    });

    this.store.getClientDetails(this.selectedClientId);
    this.updatePhoneControl();

    this.client$ = this.store.clientList$.asObservable().pipe(
      map((list) => {
        const selectedClient = list?.find((client) => client.id === this.selectedClientId)
        return selectedClient ?? null
      })
    );
  }

  public changePhoneNumber() {
    this.dialogVisibility = false;
    this.disablePhoneInput();
    this.store.changePhoneNumber(this.selectedClientId, this.clientForm?.controls['phoneNumber'].value)
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

  public ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  private updatePhoneControl(): void {
    this.store.clientDetails$.pipe(
      tap((details) => {
        if (details) {
          this.clientForm?.controls['phoneNumber'].setValue(details.phoneNumber);
          this.clientForm?.controls['phoneNumber'].updateValueAndValidity();
        }
      }),
      takeUntil(this.unsubscriber$)
    ).subscribe();
  }
}
