import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { UsersPage } from "./pages/users/users.page";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
    declarations: [
        UsersPage,
    ],
    imports: [
        UsersRoutingModule,
        CoreModule,
    ]
})
export class UsersModule { }