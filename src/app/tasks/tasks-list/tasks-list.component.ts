import { Component, OnInit } from '@angular/core';
import { UserTask } from '../interfaces/task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  taskList: UserTask[]
  constructor() { 
    this.taskList = []
    for(var i = 0; i < 6; i++) {
      this.taskList.push({
        name: `Task ${i}`,
        description: `Description ${i}`,
        user_id: "1",
        completed: false,
        date: "10-04-2022"
      })
    }
  }

  ngOnInit(): void {
  }

}
