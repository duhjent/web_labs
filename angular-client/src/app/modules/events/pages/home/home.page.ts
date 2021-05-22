import { Component, OnInit } from "@angular/core";
import { EventService } from "../../services/event.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
    constructor(private eventService: EventService) { }
    
    ngOnInit(): void {
    }
}