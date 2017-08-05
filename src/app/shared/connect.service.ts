import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ConnectService {
    constructor(private http: Http) {
    }

  getConnectData(entity: any){
    this.http.put('connect', entity).toPromise()
      .then(response => response)
      .catch(error => error); //TODO: add handler
  }
}
