import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsChartComponent } from './films-chart.component';
import { FilmsChartRoutingModule } from './films-chart.routing';
import { MoviesTopService } from '../movies-top/movies-top.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [FilmsChartComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        FilmsChartRoutingModule,
        ChartsModule
    ],
    providers: [
        MoviesTopService,
    ]
})
export class FilmsChartModule {
}
