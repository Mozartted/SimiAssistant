import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

// operators
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentStuffService {

  private baseUrl :String = './datapoint/'


  constructor(private http:Http) {
   }


   public get(){
     return this.http.get(`${this.baseUrl}appointments.json`)
                .map((res)=>res.json());
   }

   public post(data){
     return this.http.post(`${this.baseUrl}appointments.json`,data)
                .map((res)=>res.json());
   }

}
