import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { Observable, } from 'rxjs';
import { PostService } from '../post.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PostPageComponent implements OnInit {

  posts$: Observable<Post[]>;
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
    this.posts$.subscribe(posts => {
      if (posts) {
        this.media$ = this.postService.getPageImage(posts[0]);
      }
    })
  }

  getVideo(): void {
    this.posts$.subscribe(posts => {
      if (posts && posts[0].video_embed) {
        this.video = 'https://www.youtube.com/embed/' + this.getUrlId(posts[0].video_embed);
      }
    })
  }

  getPostInfo(slug: string): void {
    this.posts$ = this.postService.getPostInfo(slug).pipe(filter((posts: Post[]) => posts.length > 0));
  }


  getUrlId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

}

