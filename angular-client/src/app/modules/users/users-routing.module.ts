import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersPage } from "./pages/users.page";

const routes: Routes = [
    {
        path: '', component: UsersPage, pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }