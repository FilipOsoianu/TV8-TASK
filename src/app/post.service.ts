import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment.prod'
import { Post } from './post'
import { Media } from './media'
import { Categories } from './categories'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private BASE_URL = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPosts(page: number, categories?: string): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    if (categories !== undefined) {
      params = params.append('categories', categories);
      return this.http.get<Post[]>(this.BASE_URL + '/posts', { params: params });
    } else {
      return this.http.get<Post[]>(this.BASE_URL + '/posts', { params: params });
    }

  }

  getPostMedia(mediaUrl: string): Observable<Media> {
    return this.http.get<Media>(mediaUrl)
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
