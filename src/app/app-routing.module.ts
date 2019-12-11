import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'chart',
        loadChildren: () => import('./_pages/films-chart/films-chart.module').then(m => m.FilmsChartModule),
    },
    {
        path: 'favorite-movies',
        loadChildren: () => import('./_pages/favorite-movies/favorite-movies.module').then(m => m.FavoriteMoviesModule),
    },
    {
        path: '',
        loadChildren: () => import('./_pages/movies-top/movies-top.module').then(m => m.MoviesTopModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
