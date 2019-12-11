import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesTopComponent } from './movies-top.component';


const routes: Routes = [
    {
        path: '',
        component: MoviesTopComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MoviesTopRoutingModule { }
