import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserTask } from '../interfaces/task.interface';
import { taskList } from '../mock/UserTasksMock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getUserTasks(): Observable<UserTask[]> {
    const tasks = of(taskList());
    return tasks;
  }

  getTaskById(id: string): Observable<UserTask> {
    const task = taskList().filter(t => t.id === id)[0];
    return of(task);
  }
}
