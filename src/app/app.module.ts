import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from "./guards/auth.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { DirectoryModalComponent } from './modals/directory-modal/directory-modal.component';
import { FinderComponent } from './components/finder/finder.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MyAgePipe } from './my-age.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverViewComponent } from './components/over-view/over-view.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { ResponseModalComponent } from './modals/response-modal/response-modal.component';
import { SideBarLeftComponent } from './components/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';
import { TokenInterceptorProvider } from "./interceptors/header.interceptor";
import { TopBarChatComponent } from './components/top-bar-chat/top-bar-chat.component';
import { UserComponent } from './components/user/user.component';
import { UserModalComponent } from './modals/user-modal/user-modal.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherModalComponent } from './modals/weather-modal/weather-modal.component';
import { environment } from "src/environments/environment";

const config: SocketIoConfig = { url: `${environment.API_URL}`, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MyAgePipe,
    LoginComponent,
    RegisterComponent,
    DirectoryComponent,
    WeatherComponent,
    ResponseModalComponent,
    OverViewComponent,
    ProfileComponent,
    ChatComponent,
    DirectoryModalComponent,
    WeatherModalComponent,
    SideBarLeftComponent,
    NavBarComponent,
    SideBarRightComponent,
    UserModalComponent,
    ChatRoomComponent,
    TopBarChatComponent,
    FinderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatChipsModule,
    MatSnackBarModule,
    SocketIoModule,
    SocketIoModule.forRoot(config),
    MatSlideToggleModule,
    PickerModule




  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
