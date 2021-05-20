import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllEVentsPage } from "./pages/all-events/all-events.page";
import { ConnectedEventsPage } from "./pages/connected-events/connected-events.page";
import { EventDetailsPage } from "./pages/event-details/event-details.page";
import { MyEventsPage } from "./pages/my-events/my-events.page";

const routes: Routes = [
    {
        path: '', redirectTo: '/all', pathMatch: 'full'
    },
    {
        path: 'all', component: AllEVentsPage
    },
    {
        path: 'connected', component: ConnectedEventsPage
    },
    {
        path: 'my', component: MyEventsPage
    },
    {
        path: ':id', component: EventDetailsPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }