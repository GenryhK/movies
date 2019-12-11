import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteMoviesComponent } from './favorite-movies.component';
import { FavoriteMoviesRoutingModule } from './favorite-movies.routing';
import { SharedModule } from '../../shared.module';
import { MoviesTopService } from '../movies-top/movies-top.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        FavoriteMoviesComponent
    ],
    imports: [
        CommonModule,
        FavoriteMoviesRoutingModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
        MoviesTopService
    ]
})
export class FavoriteMoviesModule {
}
