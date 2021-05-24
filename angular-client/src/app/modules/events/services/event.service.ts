import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventModel } from "src/app/core/models/event.model";
import { ShortEventModel } from "src/app/core/models/short-event.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<EventModel[]> {
        const url = `${environment.apiUrl}/api/events`;
        return this.http.get<EventModel[]>(url);
    }

    getById(id: number): Observable<EventModel> {
        const url = `${environment.apiUrl}/api/events/${id}`;
        return this.http.get<EventModel>(url);
    }

    getConnected(): Observable<EventModel[]> {
        const url = `${environment.apiUrl}/api/events/connected`;
        return this.http.get<EventModel[]>(url);
    }

    getOrganized(): Observable<EventModel[]> {
        const url = `${environment.apiUrl}/api/events/organized`;
        return this.http.get<EventModel[]>(url);
    }

    createEvent(eventModel: ShortEventModel): Observable<EventModel> {
        const url = `${environment.apiUrl}/api/events`;
        return this.http.post<EventModel>(url, eventModel);
    }

    deleteEvent(id: number): Observable<void> {
        const url = `${environment.apiUrl}/api/events/${id}`;
        return this.http.delete<void>(url);
    }

    getTop(): Observable<EventModel[]> {
        const url = `${environment.apiUrl}/api/events/top`;
        return this.http.get<EventModel[]>(url);
    }

    addUser(id: number, userName: string): Observable<EventModel> {
        const url = `${environment.apiUrl}/api/events/adduser`;
        return this.http.post<EventModel>(url, {}, { params: { 'id': '' + id, 'userName': userName } });
    }

    removeUser(id: number, userName: string): Observable<EventModel> {
        const url = `${environment.apiUrl}/api/events/removeuser`;
        return this.http.post<EventModel>(url, {}, {params: {'id': '' + id, 'userName': userName}});
    }

    updateEvent(eventModel: EventModel): Observable<EventModel> {
        const url = `${environment.apiUrl}/api/events`;
        return this.http.put<EventModel>(url, eventModel);
    }
}