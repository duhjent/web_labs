import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { FullLayoutComponent } from "./components/full-layout/full-layout.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SimpleLayoutComponent } from "./components/simple-layout/simple-layout.component";
import { LoginPage } from "./pages/login/login.page";
import { LogoutPage } from "./pages/logout/logout.page";
import { RegisterPage } from "./pages/register/register.page";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        SimpleLayoutComponent,
        FullLayoutComponent,
        LoginPage,
        RegisterPage,
        LogoutPage
    ]
})
export class CoreModule { }