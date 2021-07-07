import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SightsMRoutingModule} from './sights-m-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SightsDetailComponent} from './sights-detail/sights-detail.component';
import {SightsFormComponent} from './sights-form/sights-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SightsComponent} from "../sights/sights.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [SightsDetailComponent, SightsFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SightsMRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SightsMModule {
}
