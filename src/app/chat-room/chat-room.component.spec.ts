import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChatRoomComponent } from "./chat-room.component";
import { FormsModule } from "@angular/forms";
import { MessagesListComponent } from "../messages-list/messages-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("ChatRoomComponent", () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRoomComponent, MessagesListComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
