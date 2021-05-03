import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { FullLayoutComponent } from "./components/full-layout/full-layout.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SimpleLayoutComponent } from "./components/simple-layout/simple-layout.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        SimpleLayoutComponent,
        FullLayoutComponent
    ]
})
export class CoreModule { }