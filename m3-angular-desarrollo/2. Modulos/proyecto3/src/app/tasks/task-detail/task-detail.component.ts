import { Component } from '@angular/core';
import { ITask } from '../task.model';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  idSize:string="30px"
  idBg:string= "blue"
  fontColor: string = 'red'
  task: ITask = {
    id: 1,
    title: 'Módulos con Angular',
    hours: 5
  }

}
