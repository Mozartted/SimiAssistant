import { Component, OnInit } from '@angular/core';
import { AppointmentStuffService } from '../appointment-stuff.service';

@Component({
  selector: 'app-appointment-list-component',
  templateUrl: './appointment-list-component.component.html',
  styleUrls: ['./appointment-list-component.component.css']
})
export class AppointmentListComponentComponent implements OnInit {

  public appointments:any;

  constructor(private appointmentStuff:AppointmentStuffService) { }

  ngOnInit() {
    this.appointmentStuff.getAppointments().subscribe(data =>{
      this.appointments = data;
      console.log(data);
    })
  }

}
