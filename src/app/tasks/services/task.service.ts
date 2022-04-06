import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserTask } from '../interfaces/task.interface';
import { taskList } from '../mock/UserTasksMock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: UserTask[] = [];

  constructor() {
    this.tasks = taskList();
  }

  getUserTasks(): Observable<UserTask[]> {
    const tasks = of(this.tasks);
    return tasks;
  }

  getTaskById(id: string): Observable<UserTask> {
    const task = this.tasks.filter(t => t.id === id)[0];
    return of(task);
  }

  updateTask(task: UserTask): Observable<boolean> {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.tasks.push(task);
    return of(true);
  }
}
