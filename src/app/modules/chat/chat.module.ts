import { ChatComponent } from 'src/app/components/chat/chat.component';
import { ChatRoomComponent } from 'src/app/components/chat-room/chat-room.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopBarChatComponent } from 'src/app/components/top-bar-chat/top-bar-chat.component';
import { UserComponent } from 'src/app/components/user/user.component';

@NgModule({
  declarations: [ChatComponent,
    ChatRoomComponent,
    TopBarChatComponent,
    UserComponent,
  ],
  imports: [
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
