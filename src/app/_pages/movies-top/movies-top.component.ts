import { Component, OnInit } from '@angular/core';
import { MoviesTopService } from './movies-top.service';

import { Movie } from '../../interfaces/movie.interface';

@Component({
    selector: 'app-movies-top',
    templateUrl: './movies-top.component.html',
    styleUrls: ['./movies-top.component.css']
})
export class MoviesTopComponent implements OnInit {
    movies: Movie [];
    lnikAdress: string = 'https://www.youtube.com/embed/6hB3S9bIaco';

    constructor(private moviesTopService: MoviesTopService) {
    }

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.moviesTopService.getMovies().subscribe(
            res => {
                const {movies} = res.data;
                this.movies = movies;
                console.log(this.movies);
            },
            error => {
                alert(error);
            }
        );
    }

}
