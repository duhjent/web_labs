import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { EventsRoutingModule } from "./events-routing.module";
import { AllEVentsPage } from "./pages/all-events/all-events.page";
import { ConnectedEventsPage } from "./pages/connected-events/connected-events.page";
import { EventDetailsPage } from "./pages/event-details/event-details.page";
import { MyEventsPage } from "./pages/my-events/my-events.page";
import { EventService } from "./services/event.service";

@NgModule({
    declarations: [
        AllEVentsPage,
        ConnectedEventsPage,
        MyEventsPage,
        EventDetailsPage
    ],
    imports: [
        EventsRoutingModule,
        SharedModule
    ],
    providers: [
        EventService
    ]
})
export class EventsModule { }