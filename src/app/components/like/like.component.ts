import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
    @Input() favorite: any;
    @Output() toggleFavorite = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    toggleFavoriteHandler() {
        this.toggleFavorite.emit(!this.favorite);
    }

}
