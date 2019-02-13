import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { RestService } from './services/rest.service';
import { ShowJsonComponent } from './show-json/show-json.component';
import { FilterdataPipe } from './filterdata.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowJsonComponent,
    FilterdataPipe,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule  
  ],
  entryComponents: [
    ShowJsonComponent
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
