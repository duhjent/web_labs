import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function sameAsValidator(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isValid = control.value === otherControl.value;
        return isValid ? null : {sameAs: {value: control.value}}
    }
}