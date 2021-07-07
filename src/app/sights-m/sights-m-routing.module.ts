import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SightsComponent} from '../sights/sights.component';
import {SightsListComponent} from '../sights-list/sights-list.component';
import {SightsFormComponent} from './sights-form/sights-form.component';

const routes: Routes = [
  {path: 'add', component: SightsFormComponent},
  {path: 'edit/:id', component: SightsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SightsMRoutingModule { }
