import { Component } from "@angular/core";
import { leftNavbarItems, rightNavbarItemsLoggedOut } from "../../constants/navbar-items";

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent { 
    readonly leftNavItems = leftNavbarItems;
    // TODO: replace with usage of authService
    readonly rightNavItems = rightNavbarItemsLoggedOut;
}