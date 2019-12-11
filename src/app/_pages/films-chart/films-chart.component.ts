import { Component, OnInit } from '@angular/core';
import { MoviesTopService } from '../movies-top/movies-top.service';

import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
    selector: 'app-films-chart',
    templateUrl: './films-chart.component.html',
    styleUrls: ['./films-chart.component.css']
})
export class FilmsChartComponent implements OnInit {
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: null,
        plugins: null
    };
    public pieChartData: number[] = [300, 500, 100];
    public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    public pieChartType: any = 'pie';
    public pieChartLegend = true;
    public pieChartColors = [
        {
            backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
    ];

    constructor(
        private moviesTopService: MoviesTopService
    ) {
    }

    ngOnInit() {
        this.moviesTopService.getMovies().subscribe(
            res => {
                const {movies} = res.data;

                this.getChartData(movies);
            },
            error => {
                alert(error);
            }
        );
    }

    getChartData(movies) {
        this.pieChartData = this.count(movies).map((item) => {
            return item.length;
        });
        this.pieChartLabels = this.count(movies).map((item) => {
            return item.map((item2) => {
                return item2.title;
            });
        });
    }

    count(data) {
        const sortBy = (key, desc = false) => (a, b) => {
            if (a[key] > b[key]) {
                return desc ? -1 : 1;
            }
            if (a[key] < b[key]) {
                return desc ? 1 : -1;
            }
            return 0;
        };

        let limiter = 0;

        return data.sort(sortBy('year')).reduce((acc, val) => {
            const {year} = val;

            if (year > limiter - 10 && year < limiter) {
                acc[acc.length - 1].push(val);


                return acc;
            } else {
                limiter = +(limiter || year) + 10;

                return [...acc, [val]];
            }
        }, []);
    }
}
