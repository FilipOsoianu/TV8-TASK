import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { Observable, } from 'rxjs';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;
  media$: Observable<string>;
  video: string;

  slug: string
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getPostInfo(this.slug);
    this.getMedia();
    this.getVideo();
  }

  getMedia(): void {
    this.post$.toPromise().then(result =>
      this.media$ = this.postService.getPageImage(result[0])
    )
  }

  getVideo(): void {
    this.post$.toPromise().then(result => {
      if (result[0].video_embed) {
        this.video = 'https://www.youtube.com/embed/' + this.getUrlId(result[0].video_embed)
      }
    })
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

