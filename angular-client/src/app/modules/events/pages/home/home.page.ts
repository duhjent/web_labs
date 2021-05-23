import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventModel } from "src/app/core/models/event.model";
import { EventService } from "../../services/event.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
    events: Observable<EventModel[]>;
    
    constructor(private eventService: EventService) { }
    
    ngOnInit(): void {
        this.fetchEvents();
    }

    fetchEvents() {
        this.events = this.eventService.getTop();
    }
}