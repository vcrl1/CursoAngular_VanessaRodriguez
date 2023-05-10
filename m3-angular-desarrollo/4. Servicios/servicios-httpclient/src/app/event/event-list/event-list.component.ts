import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[] = []
  constructor(private eventService: EventService) { }
  //interfaz de angular para arrancar el componente
  ngOnInit(): void {
    // this.eventService.findAll().subscribe(data => console.log(data));
    this.findAll()
  }

  findAll():void{
    this.eventService.findAll().subscribe(data => {
      console.log(data);
      this.events = data;
    })  }


  findByCompletedTrue():void {
    this.eventService.findAllByCompletedTrue().subscribe(data => this.events = data)
  }

  findByCompletedFalse():void{
    this.eventService.findAllByCompletedFalse().subscribe(data => this.events = data)
  }


}
