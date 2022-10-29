import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientPageComponent} from "./components/client-page/client-page.component";
import {ClientListComponent} from "./components/client-list/client-list.component";

const routes: Routes = [
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-page/:id', component: ClientPageComponent},
  {path: '**', redirectTo: 'client-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
