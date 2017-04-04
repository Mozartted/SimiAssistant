import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CreateAppointmentComponentComponent } from '../create-appointment-component/create-appointment-component.component';
// import { TaskListItemComponentComponent } from '../task-list-item-component/task-list-item-component.component';
import { AppointmentViewComponentComponent } from '../appointment-view-component/appointment-view-component.component';
import { TaskViewComponentComponent } from '../task-view-component/task-view-component.component';
import { CreateTaskComponentComponent } from '../create-task-component/create-task-component.component';
import { EditTaskComponentComponent } from '../edit-task-component/edit-task-component.component';
import { EditAppointmentComponentComponent } from '../edit-appointment-component/edit-appointment-component.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    CreateAppointmentComponentComponent,
    AppointmentViewComponentComponent,
    TaskViewComponentComponent,
    CreateTaskComponentComponent,
    EditTaskComponentComponent,
    EditAppointmentComponentComponent
  ],
  providers: [ ]
})
export class DashboardModule { }
