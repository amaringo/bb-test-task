import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientListComponent} from './components/client-list/client-list.component';
import {ClientPageComponent} from './components/client-page/client-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
