import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesTopService } from '../movies-top/movies-top.service';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-favorite-movies',
    templateUrl: './favorite-movies.component.html',
    styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
    movies: Movie [];


    constructor(
        private moviesTopService: MoviesTopService,
        private storageService: StorageService
    ) { }

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.moviesTopService.getMovies().subscribe(
            res => {
                const {movies} = res.data;

                this.movies = this.filterFavorite(movies);
            },
            error => {
                alert(error);
            }
        );
    }

    filterFavorite(arr) {
        const favorites = this.storageService.getFavoritesToLocaleStorage();

        return arr.filter((item) => {
            if (favorites.indexOf(item.title) > -1) {
                return item;
            }
        });
    }

    toggleFavoriteHandler() {
        this.getMovies();
    }

}
