import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, from } from "rxjs";
import { map } from 'rxjs/operators'
import { PostService } from '../post.service';

import { Post } from '../post';
import { Categories } from '../categories'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  posts: Post[] = [];

  private currentPage: number = 1;


  constructor(private postService: PostService, private router: Router) { }
  active = 1
  ngOnInit(): void {
    this.getPosts(this.currentPage);
  }

  getPosts(page: number): void {
    this.postService.getPosts(page).subscribe(nextPage => {
      this.posts = this.posts.concat(nextPage);
    });
    this.currentPage++;
  }

  getNextPage(): void {
    this.getPosts(this.currentPage);
  }


}
