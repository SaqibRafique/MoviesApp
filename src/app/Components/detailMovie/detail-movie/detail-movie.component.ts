import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  @Input() Movie: any;
  @Input() ID: any;
  MovieDetail: any;
  showMovies: boolean = false;
  @Output() editedEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ID'] && this.ID != null) {
      this.GetMovieDetail(this.ID);
    }
  }
  ngOnInit(): void {}

  GetMovieDetail(ID) {
    this.MovieDetail = this.Movie.find((p) => p.id === ID);
  }
  ShowMovies(pageName: string) {
    this.router.navigate([`${pageName}`]);
    this.editedEmitter.emit(false);
  }
}
