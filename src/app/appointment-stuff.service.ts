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
     return this.http.get(`${this.baseUrl}appointment`)
                .map((res)=>res.json());
   }

   public createAppointments(data){
     return this.http.post(`${this.baseUrl}create/appointment`,data)
                .map((res)=>res.json());
   }

   public updateAppointment(data){
      return this.http.post(`${this.baseUrl}create/appointment`,data)
                .map((res)=>res.json());
   }

   public deleteAppointment(){
      return this.http.delete(`${this.baseUrl}create/appointment`)
                .map((res)=>res.json());
   }

   public getAppointmentDetails(){
      return this.http.get(`${this.baseUrl}create/appointment`)
                .map((res)=>res.json());
   }



}
