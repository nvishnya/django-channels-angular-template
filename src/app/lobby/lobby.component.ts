import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-lobby",
  templateUrl: "./lobby.component.html"
  // styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  room = "";
  constructor(private chatService: ChatService, private router: Router) {}

  ngOnInit() {
    // this.chatService.onJoined().subscribe(data => {
    //   console.log("connected");
    // });
  }

  enterChatRoom() {
    if (this.room != "") {
      // this.chatService.enterChatRoom(this.room);
      this.router.navigate([this.room]);
    }
  }
}
