import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html'
})
export class LoginPage {
    formGroup = new FormGroup({ 'userName': new FormControl('', Validators.required), 'password': new FormControl('', Validators.required) });
    invalidCredentials = false;

    constructor(private authService: AuthService, private router: Router) { }

    async onSubmit() {
        const isSuccess = await this.authService.login(this.formGroup.controls['userName'].value, this.formGroup.controls['password'].value);
        if (isSuccess) {
            this.router.navigate(['/']);
        } else {
            this.invalidCredentials = true;
        }
    }
}