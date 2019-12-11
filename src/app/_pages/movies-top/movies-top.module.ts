import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesTopComponent } from './movies-top.component';
import { MoviesTopRoutingModule } from './movies-top.routing';
import { MoviesTopService } from './movies-top.service';
import { SharedModule } from '../../shared.module';



@NgModule({
    declarations: [
        MoviesTopComponent,
    ],
    imports: [
        MoviesTopRoutingModule,
        HttpClientModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        MoviesTopService
    ]
})
export class MoviesTopModule {
}
