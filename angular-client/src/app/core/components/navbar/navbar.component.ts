import { Component, Input } from "@angular/core";
import { NavbarItemModel } from "../../models/navbar-item.model";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    @Input() leftItems: NavbarItemModel[];
    @Input() rightItems: NavbarItemModel[];
}