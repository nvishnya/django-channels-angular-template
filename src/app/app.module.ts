import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { LobbyComponent } from './lobby/lobby.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    ChatRoomComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
