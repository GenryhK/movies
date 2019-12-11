import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    public favorite

    constructor() {
    }

    setFavoriteToLocaleStorage(name): void {
        let favorites = this.getFavoritesToLocaleStorage() || [];
        favorites = favorites.concat(name);

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    deleteFavoriteToLocaleStorage(name): void {
        const favorites = this.getFavoritesToLocaleStorage() || [];
        const deleteIndex = favorites.indexOf(name);
        favorites.splice(deleteIndex, 1);

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    getFavoritesToLocaleStorage(): string [] {
        return JSON.parse(localStorage.getItem('favorites'));
    }
}
