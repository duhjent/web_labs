import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { leftNavbarItems, rightNavbarItemsLoggedIn, rightNavbarItemsLoggedOut } from "../../constants/navbar-items";

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
    constructor(private authService: AuthService) { }

    readonly leftNavItems = leftNavbarItems;
    readonly rightNavItems = this.authService.isAuthenticated() ? rightNavbarItemsLoggedIn : rightNavbarItemsLoggedOut;
}