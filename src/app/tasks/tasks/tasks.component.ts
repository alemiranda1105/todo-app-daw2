import { Component, Input, OnInit } from '@angular/core';
import { UserTask } from '../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() task: undefined | UserTask;

  constructor() { }

  ngOnInit(): void {
  }

}
