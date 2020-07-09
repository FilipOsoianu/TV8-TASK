import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';

import { environment } from '../environments/environment.prod'
import { Post } from './post'
import { Media } from './media'
import { Categories } from './categories'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private BASE_URL = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPosts(page: number, categories?: string): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('per_page', '12');
    if (categories !== undefined && categories !== null) {
      params = params.append('categories', categories);
      return this.http.get<Post[]>(this.BASE_URL + '/posts', { params: params });
    } else {
      return this.http.get<Post[]>(this.BASE_URL + '/posts', { params: params });
    }

  }

  getPostMedia(mediaUrl: string): Observable<Media> {
    return this.http.get<Media>(mediaUrl).pipe(
      catchError(this.handleError)
    )
  }

  getPostInfo(slug: string): Observable<Post> {
    let params = new HttpParams();
    params = params.append('slug', slug);

    return this.http.get<Post>(this.BASE_URL + '/posts', { params: params });
  }


  getCategories(): Observable<Categories[]> {

    return this.http.get<Categories[]>(this.BASE_URL + '/categories');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }



}
