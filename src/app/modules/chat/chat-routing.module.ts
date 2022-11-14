import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { ChatComponent } from './../../components/chat/chat.component';
import { ChatRoomComponent } from 'src/app/components/chat-room/chat-room.component';
import { NgModule } from '@angular/core';
import { TopBarChatComponent } from 'src/app/components/top-bar-chat/top-bar-chat.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserResolver } from './../../resolvers/user.resolver';

const routes: Routes = [{

  path: "", component: ChatComponent, canActivate: [AuthGuard], resolve: { user: UserResolver },
  children: [
    { path: "chatroom", component: ChatRoomComponent, canActivate: [AuthGuard] },
    { path: "user", component: UserComponent },
    { path: "topchatbar", component: TopBarChatComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
