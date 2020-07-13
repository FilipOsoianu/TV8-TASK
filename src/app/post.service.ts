import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment.prod'
import { Post } from './post'
import { Media } from './media'
import { Categories } from './categories'
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private DEFAULT_IMAGE = 'https://tv8.md/wp-content/uploads/2018/12/placeholder-tv8-new-450x253.jpg';
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

  getPostMedia(post: Post): Observable<Media> {

    return this.http.get<Media>(post._links["wp:featuredmedia"][0].href)
  }

  getPostImage(post: Post): Observable<string> {

    return this.getPostMedia(post).pipe(
      map(media => media.media_details?.sizes?.venosa_grid?.source_url || media.source_url || this.DEFAULT_IMAGE),
      catchError(() => of(this.DEFAULT_IMAGE)));
  }

  getPageImage(post: Post): Observable<string>{

    return this.getPostMedia(post).pipe(
      map(media => media.media_details?.sizes?.full?.source_url || media.source_url || this.DEFAULT_IMAGE),
      catchError(() => of(this.DEFAULT_IMAGE)));
  }

  getPostInfo(slug: string): Observable<Post> {
    let params = new HttpParams();
    params = params.append('slug', slug);

    return this.http.get<Post>(this.BASE_URL + '/posts', { params: params });
  }



  getCategories(): Observable<Categories[]> {

    return this.http.get<Categories[]>(this.BASE_URL + '/categories');
  }


}
