import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LobbyComponent } from "./lobby/lobby.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";

const routes: Routes = [
  {
    path: "",
    component: LobbyComponent,
    data: { title: "Lobby" }
  },
  {
    path: ":name",
    component: ChatRoomComponent,
    data: { title: "Chat room" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
