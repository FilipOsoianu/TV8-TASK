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
  media$: Observable<Media>;
  media: Media;

  constructor(private postService: PostService, private router: Router) { }


  ngOnInit(): void {
    this.getMedia();
  }

  getMedia(): void {
    this.media$ = this.postService.getPostMedia(this.post._links["wp:featuredmedia"][0].href)
  }

  public onTap() {
    this.router.navigate(["post/" + this.post.slug]);
  }

}
