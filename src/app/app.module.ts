import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {environment} from '../environments/environment';
import {SightsComponent} from './sights/sights.component';
import {NavComponent} from './nav/nav.component';
import {SightsListComponent} from './sights-list/sights-list.component';
import {CommonModule} from '@angular/common';
import {SightsMRoutingModule} from "./sights-m/sights-m-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavComponent,
    SightsListComponent,
    SightsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxToken
    }),
    ReactiveFormsModule,
    HttpClientModule,
    SightsMRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
