import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CattleService } from './cattle.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HomeComponent,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    CattleService,
  ],
  bootstrap: []
})
export class AppModule { }
