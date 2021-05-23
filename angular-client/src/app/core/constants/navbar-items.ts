import { NavbarItemModel } from "../models/navbar-item.model";

export const leftNavbarItems: NavbarItemModel[] = [
    {
        displayName: 'Home',
        route: ''
    },
    {
        displayName: 'Events',
        expandable: true,
        subItems: [
            {
                displayName: 'All Events',
                route: ['events', 'all']
            },
            {
                displayName: 'Connected Events',
                route: ['events', 'connected']
            },
            {
                displayName: 'Organized Events',
                route: ['events', 'organized']
            }
        ],
        id: 'events'
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
        displayName: 'Log Out',
        route: 'logout'
    }
]