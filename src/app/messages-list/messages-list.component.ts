import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages-list",
  templateUrl: "./messages-list.component.html"
  // styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
