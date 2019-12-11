import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsChartComponent } from './films-chart.component';


const routes: Routes = [
    {
        path: '',
        component: FilmsChartComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FilmsChartRoutingModule { }
