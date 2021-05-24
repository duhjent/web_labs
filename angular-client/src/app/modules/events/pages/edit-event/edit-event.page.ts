import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventModel } from "src/app/core/models/event.model";
import { EventService } from "../../services/event.service";

@Component({
    selector: 'app-edit-event',
    templateUrl: './edit-event.page.html'
})
export class EditEventPage implements OnInit {
    id: number;
    event: EventModel;
    newUserName: string = '';

    constructor(private route: ActivatedRoute, private eventService: EventService) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.fetchEvent();
    }

    fetchEvent() {
        this.eventService.getById(this.id).subscribe(resp => this.event = resp);
    }

    removeUser(userName: string) {
        this.eventService.removeUser(this.id, userName).subscribe(resp => { this.event = resp; });
    }

    addUser() {
        this.eventService.addUser(this.id, this.newUserName).subscribe(resp => { this.event = resp; });
        this.newUserName = '';
    }

    saveChanges() {
        this.eventService.updateEvent(this.event).subscribe(resp => { this.event = resp; });
    }
}