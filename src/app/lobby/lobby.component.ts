import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "app-lobby",
  templateUrl: "./lobby.component.html"
  // styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  room = "";
  constructor(private router: Router) {}

  enterChatRoom() {
    if (this.room != "") {
      this.router.navigate([this.room]);
    }
  }
}
