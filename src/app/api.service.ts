import { Injectable } from '@angular/core';

import { AppConfig } from './app.config';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public appConfig: any = AppConfig;

    constructor() {
    }

    getURL(): string {
        return this.appConfig.apiUrl;
    }
}
