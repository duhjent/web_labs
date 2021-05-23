import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { sameAsValidator } from "src/app/modules/shared/validators/same-as.validator";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html'
})
export class RegisterPage implements OnInit {
    errorHappened = false;
    formGroup: FormGroup;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        const passwordControl = new FormControl('', Validators.required);
        this.formGroup = new FormGroup({
            'userName': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': passwordControl,
            'confirmPassword': new FormControl('', [Validators.required, sameAsValidator(passwordControl)]),
            'role': new FormControl('', Validators.required)
        });
    }

    async onSubmit() {
        const isSuccessful = await this.authService.register({
            userName: this.formGroup.controls['userName'].value,
            password: this.formGroup.controls['password'].value,
            email: this.formGroup.controls['email'].value,
            role: this.formGroup.controls['role'].value
        });
        if (isSuccessful) {
            this.router.navigate(['/']);
        } else {
            this.errorHappened = true;
        }
    }
}