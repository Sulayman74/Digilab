import { ChatComponent } from 'src/app/components/chat/chat.component';
import { ChatRoomComponent } from 'src/app/components/chat-room/chat-room.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarChatComponent } from 'src/app/components/top-bar-chat/top-bar-chat.component';

@NgModule({
  declarations: [ChatComponent,
    ChatRoomComponent,
    TopBarChatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
