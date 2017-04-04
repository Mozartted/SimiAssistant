import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { MainViewComponentComponent } from './main-view-component/main-view-component.component';
import { CreateAppointmentComponentComponent } from './create-appointment-component/create-appointment-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { AppointmentListComponentComponent } from './appointment-list-component/appointment-list-component.component';
import { AppointmentListItemComponentComponent } from './appointment-list-item-component/appointment-list-item-component.component';
import { TaskListItemComponentComponent } from './task-list-item-component/task-list-item-component.component';
import { AppointmentViewComponentComponent } from './appointment-view-component/appointment-view-component.component';
import { TaskViewComponentComponent } from './task-view-component/task-view-component.component';
import { CreateTaskComponentComponent } from './create-task-component/create-task-component.component';
import { EditTaskComponentComponent } from './edit-task-component/edit-task-component.component';
import { EditAppointmentComponentComponent } from './edit-appointment-component/edit-appointment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    ListComponentComponent,
    MainViewComponentComponent,
    CreateAppointmentComponentComponent,
    TaskListComponentComponent,
    AppointmentListComponentComponent,
    AppointmentListItemComponentComponent,
    TaskListItemComponentComponent,
    AppointmentViewComponentComponent,
    TaskViewComponentComponent,
    CreateTaskComponentComponent,
    EditTaskComponentComponent,
    EditAppointmentComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            {
              path: '',
              component:  DashboardComponentComponent,
              //canActivate:[AuthGuard]
            }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
