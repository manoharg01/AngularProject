import { Component, OnInit } from '@angular/core';
import { Music } from './music.model';

@Component({
  selector: 'app-musiclibrary',
  templateUrl: './musiclibrary.component.html',
  styleUrls: ['./musiclibrary.component.css']
})
export class MusiclibraryComponent implements OnInit {
  mymusic: Music[] = [
    new Music('Blank Space', 'Taylor swift'),
    new Music('See You Again', 'Wiz Taylor'),
    new Music('Despacito', 'Yankee'),
    new Music('Hello', 'Adele'),
    new Music('Faded', 'Alan Walker'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
