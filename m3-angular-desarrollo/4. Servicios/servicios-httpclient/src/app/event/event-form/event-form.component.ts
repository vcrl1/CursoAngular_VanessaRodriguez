import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  title: string = "";

  createdEvent: IEvent | undefined
  eventToUpdate: IEvent|undefined;
  titleToUpdate: string="";

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.findById(1).subscribe(data => {
      this.eventToUpdate = data;
      this.titleToUpdate = this.eventToUpdate.title;
    });
  }

  create(): void {
    let event: IEvent = {
      userId: 1,
      id: undefined,
      title: this.title,
      completed: false
    }
    this.eventService.create(event).subscribe(data => this.createdEvent = data)
    this.title=""
  }


update(): void {
  if (!this.eventToUpdate) return; // si no hay evento a actualizar entonces marchamos

  this.eventToUpdate.title = this.titleToUpdate;
  this.eventService.update(this.eventToUpdate).subscribe(data => console.log(data));
  


}
}
