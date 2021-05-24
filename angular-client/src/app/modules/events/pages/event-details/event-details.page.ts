import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventModel } from "src/app/core/models/event.model";
import { EventService } from "../../services/event.service";

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.page.html'
})
export class EventDetailsPage implements OnInit {
    id: number;
    event: EventModel;

    constructor(private route: ActivatedRoute, private eventService: EventService) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.eventService.getById(this.id).subscribe(resp => this.event = resp);
    }
}