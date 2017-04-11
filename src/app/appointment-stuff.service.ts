import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from '../environments/environment'

// operators
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentStuffService {

  private baseUrl :String = environment.endpoint;


  constructor(private http:Http) {
   }


   public getAppointments(){
     return this.http.get(`${this.baseUrl}`)
                .map((res)=>res.json());
   }

   public postAppointments(data){
     return this.http.post(`${this.baseUrl}appointments.json`,data)
                .map((res)=>res.json());
   }

}
