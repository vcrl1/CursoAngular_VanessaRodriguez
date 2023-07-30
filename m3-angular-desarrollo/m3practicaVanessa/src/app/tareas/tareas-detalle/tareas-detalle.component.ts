import { Component } from '@angular/core';
import { ITareas } from '../tareas.model';
import { ActivatedRoute } from '@angular/router';
import { TareasServiceService } from '../tareas-service.service';

@Component({
  selector: 'app-tareas-detalle',
  templateUrl: './tareas-detalle.component.html',
  styleUrls: ['./tareas-detalle.component.css']
})
export class TareasDetalleComponent {
  tarea: ITareas | undefined;

  constructor(private activatedRoute: ActivatedRoute, 
    private tareasService:TareasServiceService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);

      this.tareasService.findById(id).subscribe(data => {
        this.tarea = data;
        if (!(this.tarea.id > 0)) return;
        this.tareasService.findById(this.tarea.id).subscribe(data => this.tarea = data)
      });

    });
  }
}
