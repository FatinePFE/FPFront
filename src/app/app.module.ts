import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import { HomeComponent } from './components/home/home.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { ProposalControllerService } from './api/proposalController.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropositionComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,routing, HttpClientModule, FacebookModule.forRoot(),
  ],
  providers: [ProposalControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
