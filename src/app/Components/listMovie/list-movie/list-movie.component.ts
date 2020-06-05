import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  Movies: any;
  SelectedMovie: any;
  selectedId: any;
  ShowDetail: boolean = false;
  filteredMovie: any;
  afterSearch: any;
  newSearch: string;
  MovieFound: boolean = true;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.GetAllMovies();
  }
  GetAllMovies() {
    this.http.get('../assets/movies.json/').subscribe((response) => {
      this.Movies = response;
      this.afterSearch = response;
    });
  }
  applyFilter(filterValue: string) {
    if (filterValue) {
      this.filteredMovie = this.afterSearch.filter((p) =>
        String(p.name.toLowerCase()).includes(filterValue.toLowerCase())
      );
      this.Movies = this.filteredMovie;
    } else {
      this.Movies = this.afterSearch;
    }
  }
  updateValue(a) {
    this.ShowDetail = a;
  }
  clearSearch(){
    this.Movies = this.afterSearch;
  }
  GetMovie(id) {
    this.router.navigate([`${'movies/movie_detail'}`]);
    this.ShowDetail = true;
    this.selectedId = id;
  }
}
