import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventModel } from "src/app/core/models/event.model";
import { EventService } from "../../services/event.service";

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.page.html'
})
export class CreateEventPage {
    event: EventModel = { name: '', description: '', eventDate: new Date() };

    constructor(private eventService: EventService, private router: Router) { }

    onSave() {
        this.eventService.createEvent(this.event).subscribe(resp => this.router.navigate(['/events', resp.id]));
    }
}