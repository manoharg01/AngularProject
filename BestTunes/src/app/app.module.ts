import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusiclibraryComponent } from './musiclibrary/musiclibrary.component';
import { GenreComponent } from './musiclibrary/genre/genre.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusiclibraryComponent,
    GenreComponent,
    MyPlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
