import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TaskStuffService {

  private baseUrl :String = './datapoint/';

  constructor(
  	private http: Http
  	) { }

  public get(){
    return this.http.get(`${this.baseUrl}tasks.json`)
    			.map((res) => res.json());
  }

  public post(data){
    return this.http.post(`${this.baseUrl}tasks.json`,data)
            .map((res)=>res.json());
  }

}
