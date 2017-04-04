import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { DashboardModule} from "./dashboard-component/dashboard.module";

import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { MainViewComponentComponent } from './main-view-component/main-view-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { AppointmentListComponentComponent } from './appointment-list-component/appointment-list-component.component';
import { AppointmentListItemComponentComponent } from './appointment-list-item-component/appointment-list-item-component.component';
import { TaskListItemComponentComponent } from './task-list-item-component/task-list-item-component.component';

// all services
import { TaskStuffService} from './task-stuff.service';
import {AppointmentStuffService} from './appointment-stuff.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    ListComponentComponent,
    MainViewComponentComponent,
    TaskListComponentComponent,
    AppointmentListComponentComponent,
    AppointmentListItemComponentComponent,
    TaskListItemComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    RouterModule.forRoot(
      []
    )
  ],
  providers: [
    TaskStuffService,
    AppointmentStuffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
