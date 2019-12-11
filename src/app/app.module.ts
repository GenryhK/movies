import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        NavPanelComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
