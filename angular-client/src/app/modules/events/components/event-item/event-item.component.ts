import { Component, Input } from "@angular/core";
import { EventModel } from "src/app/core/models/event.model";

@Component({
    selector: 'app-event-item',
    templateUrl: './event-item.component.html'
})
export class EventItemComponent {
    @Input() eventItem: EventModel
    @Input() isEditable: boolean;
}