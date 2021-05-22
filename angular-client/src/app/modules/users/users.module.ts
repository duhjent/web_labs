import { NgModule } from "@angular/core";
import { LoginPage } from "./pages/login/login.page";
import { UsersPage } from "./pages/users/users.page";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
    declarations: [
        UsersPage,
        LoginPage
    ],
    imports: [
        UsersRoutingModule
    ]
})
export class UsersModule { }