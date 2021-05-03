import { NgModule } from "@angular/core";
import { EventsRoutingModule } from "./events-routing.module";
import { AllEVentsPage } from "./pages/all-events/all-events.page";
import { ConnectedEventsPage } from "./pages/connected-events/connected-events.page";
import { EventDetailsPage } from "./pages/event-details/event-details.page";
import { MyEventsPage } from "./pages/my-events/my-events.page";

@NgModule({
    declarations: [
        AllEVentsPage,
        ConnectedEventsPage,
        MyEventsPage,
        EventDetailsPage
    ],
    imports: [
        EventsRoutingModule
    ]
})
export class EventsModule { }