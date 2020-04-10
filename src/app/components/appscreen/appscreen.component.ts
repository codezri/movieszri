import { Component, OnInit, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { SelectionsService } from 'src/app/services/selections.service';

@Component({
  selector: 'app-appscreen',
  templateUrl: './appscreen.component.html',
  styleUrls: ['./appscreen.component.less']
})
export class AppscreenComponent implements OnInit {

  state = 'menu';
  selection: any;
  @Output() movie: any;
  year = new Date().getFullYear();
  version = '0.1';

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  menuClicked(selection: any) {
    this.selection = selection;
    this.state = 'loading';
    this.movieService.getMatchingMovie(selection.id).subscribe(data => {
      this.state = 'result';
      this.movie = data;
    });
  }

  reloadClicked() {
    this.menuClicked(this.selection);
  }

}
