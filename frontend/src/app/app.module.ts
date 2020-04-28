import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
