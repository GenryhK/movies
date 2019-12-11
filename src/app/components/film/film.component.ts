import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from '../../interfaces/movie.interface';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
    @Input() move: Movie;
    @Output() toggleFavorite = new EventEmitter();
    favorite: boolean = false;

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.checkFavorite();
    }

    checkFavorite() {
        const {title} = this.move;
        this.favorite = this.storageService.getFavoritesToLocaleStorage().includes(title);
    }

    toggleFavoriteHandler(event) {
        const {title} = this.move;
        !this.favorite ? this.storageService.setFavoriteToLocaleStorage(title) : this.storageService.deleteFavoriteToLocaleStorage(title)
        this.favorite = event;
        this.toggleFavorite.emit(!this.favorite);
    }
}
