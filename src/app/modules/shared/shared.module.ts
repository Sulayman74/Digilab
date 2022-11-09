import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DirectoryModalComponent } from 'src/app/modals/directory-modal/directory-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MyAgePipe } from 'src/app/my-age.pipe';
import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ResponseModalComponent } from 'src/app/modals/response-modal/response-modal.component';
import { RouterModule } from '@angular/router';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';
import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';

@NgModule({
  declarations: [WeatherComponent,
    WeatherModalComponent,
    UserModalComponent,
    ResponseModalComponent,
    MyAgePipe,
    DirectoryModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    PickerModule,
    MatBadgeModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    DirectoryModalComponent,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MyAgePipe,
    PickerModule,
    ResponseModalComponent,
    ReactiveFormsModule,
    RouterModule,
    UserModalComponent,
    WeatherModalComponent,
    WeatherComponent
  ]

})
export class SharedModule { }
