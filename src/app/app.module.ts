import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule, routingComponents } from './app-routing.module'

import { AppComponent } from './app.component';
import { NabbarComponent } from './navbar/app.navbar';
import { ResponseComponent } from './response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    NabbarComponent,
    routingComponents,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
