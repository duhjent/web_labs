import { Injectable } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor(private authService: AuthService) { }
}