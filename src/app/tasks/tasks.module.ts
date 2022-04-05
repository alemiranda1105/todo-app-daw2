import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TaskFormComponent,
    TasksComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TasksListComponent
  ]
})
export class TasksModule { }
