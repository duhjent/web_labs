import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllEVentsPage } from "./pages/all-events/all-events.page";
import { ConnectedEventsPage } from "./pages/connected-events/connected-events.page";
import { CreateEventPage } from "./pages/create-event/create-event.page";
import { EditEventPage } from "./pages/edit-event/edit-event.page";
import { EventDetailsPage } from "./pages/event-details/event-details.page";
import { HomePage } from "./pages/home/home.page";
import { OrganizedEventsPage } from "./pages/organized-events/organized-events.page";

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'all', component: AllEVentsPage
    },
    {
        path: 'connected', component: ConnectedEventsPage
    },
    {
        path: 'organized', component: OrganizedEventsPage
    },
    {
        path: 'create', component: CreateEventPage
    },
    {
        path: ':id', component: EventDetailsPage
    },
    {
        path: ':id/edit', component: EditEventPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }