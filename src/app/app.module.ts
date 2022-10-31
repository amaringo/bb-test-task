import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientListComponent} from './components/client-list/client-list.component';
import {ClientPageComponent} from './components/client-page/client-page.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {TableModule} from "primeng/table";
import {InputMaskModule} from "primeng/inputmask";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CurrencyTextComponent} from './components/currency-text/currency-text.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientPageComponent,
    CurrencyTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    InputMaskModule,
    ButtonModule,
    DialogModule,
    CardModule,
    PanelModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "ru-RU"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
