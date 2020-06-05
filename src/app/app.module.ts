import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './Components/listMovie/list-movie/list-movie.component';
import { DetailMovieComponent } from './Components/detailMovie/detail-movie/detail-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ListMovieComponent, DetailMovieComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
