import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponentComponent } from '../create-appointment-component/create-appointment-component.component';
// import { TaskListItemComponentComponent } from '../task-list-item-component/task-list-item-component.component';
import { AppointmentViewComponentComponent } from '../appointment-view-component/appointment-view-component.component';
import { TaskViewComponentComponent } from '../task-view-component/task-view-component.component';
import { CreateTaskComponentComponent } from '../create-task-component/create-task-component.component';
import { EditTaskComponentComponent } from '../edit-task-component/edit-task-component.component';
import { EditAppointmentComponentComponent } from '../edit-appointment-component/edit-appointment-component.component';



const appRoutes: Routes = [
  { path: 'appintmentview/:id',  component: AppointmentViewComponentComponent },
  { path: 'taskview/:id', component: TaskViewComponentComponent },
  { path: 'appointmentview', component: CreateAppointmentComponentComponent },
  { path: 'taskcreate', component: CreateTaskComponentComponent },
  { path: 'taskedit/:id', component: EditTaskComponentComponent },
  { path: 'appointmentedit/:id', component: EditAppointmentComponentComponent },
  { path:'**', component:AppointmentViewComponentComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }