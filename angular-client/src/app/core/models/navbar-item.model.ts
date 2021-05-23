export interface NavbarItemModel {
    displayName: string;
    route?: string | string[];
    expandable?: boolean;
    subItems?: NavbarItemModel[];
    id?: string;
}