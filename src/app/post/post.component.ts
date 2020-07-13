import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";

import { Router, NavigationExtras } from "@angular/router";

import { Post } from '../post';
import { PostService } from '../post.service';
import { Media } from '../media';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  media$: Observable<string>;

  constructor(private postService: PostService, private router: Router) { }


  ngOnInit(): void {
    this.getMedia();
  }

  getMedia(): void {
    this.media$ = this.postService.getPostImage(this.post)
  }

  public onTap() {
    this.router.navigate(["post/" + this.post.slug]);
  }

}
