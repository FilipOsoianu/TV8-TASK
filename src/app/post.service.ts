import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Post } from './post'
import { environment } from '../environments/environment.prod'
import { Media } from './media'
import { NumberFormatStyle } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private BASE_URL = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPosts(page: number): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.http.get<Post[]>(this.BASE_URL + '/posts', { params: params });
  }

  getPostMedia(mediaUrl: string): Observable<Media> {
    return this.http.get<Media>(mediaUrl)
  }

  getPostInfo(slug: string): Observable<Post> {
    let params = new HttpParams();
    params = params.append('slug', slug);

    return this.http.get<Post>(this.BASE_URL + '/posts', { params: params });
  }



}
