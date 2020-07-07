import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { Media } from '../media';
import { Observable, Observer, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostService } from '../post.service';
import { resourceUsage } from 'process';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;
  media$: Observable<Media>;

  slug: string
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getPostInfo(this.slug);
    this.getMedia();

  }

  getMedia(): void {
    this.post$.toPromise().then(result =>
      this.media$ = this.postService.getPostMedia(result[0]._links["wp:featuredmedia"][0].href)
    )
  }

  getPostInfo(slug: string): void {
    this.post$ = this.postService.getPostInfo(slug);
  }


  getUrlId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }


}

