import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Message } from "../message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html"
  // styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  room: string;
  message: string;
  messages: Message[];

  constructor(
    private chatService: ChatService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.room = window.location.pathname
      .split("/")
      .reverse()
      .filter(x => x)[0];
    
    // this.chatService.enterChatRoom(this.room);
    // this.chatService.onJoined().subscribe(data => {
    //   console.log("connected");
    // });
    this.getMessages();
    this.chatService.onMessage().subscribe((message: Message) => {
      console.log(message);
      this.messages.push(message);
    });
  }
  getMessages() {
    this.messageService
      .getMessages(this.room)
      .subscribe(messages => (this.messages = messages));
  }
  sendMessage() {
    if (this.message != "") {
      this.chatService.sendMessage(this.message);
      this.message = "";
    }
  }
}
