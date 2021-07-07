import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SightsComponent} from './sights/sights.component';
import {SightsListComponent} from './sights-list/sights-list.component';
import {SightsMModule} from "./sights-m/sights-m.module";
import {SightsMRoutingModule} from "./sights-m/sights-m-routing.module";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', redirectTo: '/sights', pathMatch: 'full'},
  {path: 'sights', component: SightsComponent},
  {path: 'sights-list', component: SightsListComponent},
  {
    path: '',
    loadChildren: () => import('./sights-m/sights-m-routing.module').then(m => m.SightsMRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SightsMModule,
    SightsMRoutingModule,
    HttpClientModule
  ],
  providers: [
    SightsListComponent
  ],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
