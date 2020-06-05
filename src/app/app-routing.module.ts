import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMovieComponent } from './Components/detailMovie/detail-movie/detail-movie.component';
import { ListMovieComponent } from './Components/listMovie/list-movie/list-movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies/movie_detail',
    component: DetailMovieComponent,
  },
  {
    path: 'movies',
    component: ListMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
