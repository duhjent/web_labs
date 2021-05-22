import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { RegistrationModel } from "../models/registration.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    login(userName: string, password: string): Observable<boolean> {
        return of(false);
    }

    register(registrationModel: RegistrationModel): Observable<boolean> {
        return of(false);
    }

    isAuthenticated(): boolean {
        return false;
    }

    getToken(): string {
        return '';
    }
}