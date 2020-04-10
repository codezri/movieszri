import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movieresult',
  templateUrl: './movieresult.component.html',
  styleUrls: ['./movieresult.component.less']
})
export class MovieresultComponent implements OnInit {

  @Input() movie:any;
  @Output() reloadClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if(this.movie) {
      this.movie.imagePath = `https://image.tmdb.org/t/p/w500${encodeURI(this.movie.poster_path)}`;
      this.movie.year = this.movie.release_date.split('-')[0];
    }
  }

  goBack() {
    location.reload();
  }

  googleSearch() {
    window.open(`https://www.google.com/search?q=${this.movie.title} ${this.movie.year}`);
  }

  refreshMovie() {
    this.reloadClicked.emit();
  }

}
