import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasServiceService } from '../tareas-service.service';
import { ITareas } from '../tareas.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.css']
})
export class TareasFormComponent implements OnInit {
tarea:ITareas|undefined
  tareasForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    description: new FormControl<string>('', [Validators.maxLength(1000)]),
    hours: new FormControl<number>(0, [Validators.min(30)]),
  })

  constructor(
    private tareasService:TareasServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.tareasService.findById(id).subscribe(tarea => this.loadTareasForm(tarea));
    });
  }

  loadTareasForm(tarea: ITareas): void {

    this.tareasForm.reset({
      id: tarea.id,
      title: tarea.title,
      description: tarea.description,
      hours: tarea.hours,
    
    });
  }
}
