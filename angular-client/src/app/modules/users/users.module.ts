import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { UserItemComponent } from "./components/user-item/user-item.component";
import { UsersPage } from "./pages/users/users.page";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
    declarations: [
        UsersPage,
        UserItemComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        CoreModule,
        FormsModule
    ]
})
export class UsersModule { }