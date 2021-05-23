import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/core/models/user.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<UserModel[]> {
        const url = `${environment.apiUrl}/api/users`;
        return this.http.get<UserModel[]>(url);
    }

    getUser(userName: string): Observable<UserModel> {
        const url = `${environment.apiUrl}/api/users/${userName}`;
        return this.http.get<UserModel>(url);
    }

    changeUserName(userName: string, newUserName: string): Observable<UserModel> {
        const url = `${environment.apiUrl}/api/users/${userName}/setUsername/${newUserName}`;
        return this.http.post<UserModel>(url, {});
    }

    changeUserEmail(userName: string, newEmail: string): Observable<UserModel> {
        const url = `${environment.apiUrl}/api/users/${userName}/setEmail/${newEmail}`;
        return this.http.post<UserModel>(url, {});
    }

    deleteUser(userName: string): Observable<void> {
        const url = `${environment.apiUrl}/api/users/${userName}`;
        return this.http.delete<void>(url);
    }
}