import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Post } from '../post'
import { environment } from '../../environments/environment.prod'
import {Media} from '../post/media'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private BASE_URL = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.BASE_URL + '/posts')
  }

  getPostMedia(mediaUrl: string): Observable<Media> {
    return this.http.get<Media>(mediaUrl)
  }
}
