import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-panel',
    templateUrl: './nav-panel.component.html',
    styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {
    routes: any = [
        {
            name: 'maine-page',
            route: '',
        },
        {
            name: 'chart',
            route: 'chart'
        },
        {
            name: 'favorite',
            route: 'favorite-movies'
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    navigate(route) {
        this.router.navigate([route]);
    }
}
