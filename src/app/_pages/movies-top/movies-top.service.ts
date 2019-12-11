import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MoviesTopService {

    constructor(
        private http: HttpClient,
        private apiService: ApiService,
    ) {
    }

    // getMovies(): Observable<any> {
    // block by CORS so I get response from API using Postman
    //     return this.http.get(this.apiService.getURL() + '?end=20&token=af86c07c-f52d-4347-a94d-399f42f46647&format=json&data=1', httpOptions);
    // }

    getMovies(): Observable<any> {
        return this.http.get('assets/movies.json');
    }
}
