import { NgModule } from "@angular/core";
import { UsersPage } from "./pages/users.page";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
    declarations: [
        UsersPage
    ],
    imports: [
        UsersRoutingModule
    ]
})
export class UsersModule { }