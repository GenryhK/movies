import { NgModule } from '@angular/core';
import { FilmComponent } from './components/film/film.component';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { StorageService } from './services/storage.service';
import { TrailerModalComponent } from './components/trailer-modal/trailer-modal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FilmComponent,
        LikeComponent,
        TrailerModalComponent,
    ],
    providers: [
        StorageService
    ],
    exports: [
        FilmComponent,
        LikeComponent,
        TrailerModalComponent
    ]
})
export class SharedModule {}
