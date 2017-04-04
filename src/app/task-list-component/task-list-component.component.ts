import { Component, OnInit } from '@angular/core';
import {TaskStuffService} from '../task-stuff.service';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
