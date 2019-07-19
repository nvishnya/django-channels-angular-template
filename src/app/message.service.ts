import { Injectable } from "@angular/core";
import { Message } from "./message";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: "root"
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessages(room: string): Observable<Message[]> {
    return this.http.get<Message[]>(
      // "http://localhost:8000/api/messages/abc/"
      window.location.host + "/api/messages/" + room
    );
  }
}
