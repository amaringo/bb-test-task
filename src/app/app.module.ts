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

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    InputMaskModule,
    ButtonModule,
    DialogModule,
    CardModule,
    PanelModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "ru-RU"
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
