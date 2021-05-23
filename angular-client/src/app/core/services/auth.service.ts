import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { RegistrationModel } from "../models/registration.model";
import jwt_decode from 'jwt-decode';
import { UserRole } from "../models/user-role.enum";

const tokenKey = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    async login(userName: string, password: string): Promise<boolean> {
        const url = `${environment.apiUrl}/api/users/login`;
        try {
            const resp = await this.http.get<any>(url, { params: { userName: userName, password: password } }).toPromise();
            localStorage.setItem(tokenKey, resp.token);
            return true;
        } catch(err) {
            return false;
        }
    }

    async register(registrationModel: RegistrationModel): Promise<boolean> {
        const url = `${environment.apiUrl}/api/users`;
        try {
            const resp = await this.http.post<any>(url, registrationModel).toPromise();
            localStorage.setItem(tokenKey, resp.token);
            return true;
        } catch(err) {
            return false;
        }
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(tokenKey);
        if (!token) {
            return false;
        }
        let parsedToken = jwt_decode(token) as any;
        const currentTime = new Date().getTime() / 1000;
        if (parsedToken.exp < currentTime) {
            return false;
        }
        return true;
    }

    getToken(): string {
        return localStorage.getItem(tokenKey);
    }

    getRole(): UserRole {
        const decodedToken = jwt_decode(this.getToken()) as any;
        return UserRole[decodedToken.role as string];
    }

    logout() {
        localStorage.removeItem(tokenKey);
    }
}