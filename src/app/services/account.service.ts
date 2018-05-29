import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import { City } from '../model/model.city';

@Injectable()
export class AccountService {
  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }


  updateAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/account/update',user)
      .map(resp=>resp.json());
  }

  getCities(city:City){
    return this.http.get(AppComponent.API_URL+'/cities')
      .map(resp=>resp.json());
  }

}
