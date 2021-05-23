import { NavbarItemModel } from "../models/navbar-item.model";

export const leftNavbarItems: NavbarItemModel[] = [
    {
        displayName: 'Home',
        route: ''
    },
    {
        displayName: 'Events',
        route: ['events', 'all']
    },
    {
        displayName: 'Users',
        route: 'users'
    }
];

export const rightNavbarItemsLoggedOut: NavbarItemModel[] = [
    {
        displayName: 'Register',
        route: 'register'
    },
    {
        displayName: 'Log In',
        route: 'login'
    }
]

export const rightNavbarItemsLoggedIn: NavbarItemModel[] = [
    {
        displayName: 'Profile',
        route: ['users', 'me']
    },
    {
        displayName: 'Log Out',
        route: 'logout'
    }
]