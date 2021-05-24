import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "../shared/shared.module";
import { EventItemComponent } from "./components/event-item/event-item.component";
import { EventsRoutingModule } from "./events-routing.module";
import { AllEVentsPage } from "./pages/all-events/all-events.page";
import { ConnectedEventsPage } from "./pages/connected-events/connected-events.page";
import { CreateEventPage } from "./pages/create-event/create-event.page";
import { EditEventPage } from "./pages/edit-event/edit-event.page";
import { EventDetailsPage } from "./pages/event-details/event-details.page";
import { HomePage } from "./pages/home/home.page";
import { OrganizedEventsPage } from "./pages/organized-events/organized-events.page";
import { EventService } from "./services/event.service";

@NgModule({
    declarations: [
        AllEVentsPage,
        ConnectedEventsPage,
        OrganizedEventsPage,
        EventDetailsPage,
        HomePage,
        EventItemComponent,
        CreateEventPage,
        EditEventPage
    ],
    imports: [
        EventsRoutingModule,
        CoreModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        EventService
    ]
})
export class EventsModule { }