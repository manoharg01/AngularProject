import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres = [
    'Electronic Dance Music',
    'Pop',
    'Rock',
    'Classical',
    'Hip Hop'
  ];

  constructor() { }

  ngOnInit() {
  }

}
