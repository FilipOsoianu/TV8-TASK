import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";

import { Post } from '../post';
import { PostService } from '../posts/post.service';
import { Media } from './media';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  media: Observable<Media>;
  imageUrl: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getMedia();

    this.media.subscribe((data: Media) => this.imageUrl = data.media_details.sizes.medium.source_url)
  }

  getMedia(): void {
    this.media = this.postService.getPostMedia(this.post._links["wp:featuredmedia"][0].href)
  }

}
