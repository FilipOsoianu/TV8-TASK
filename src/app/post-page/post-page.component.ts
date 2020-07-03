import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { Media } from '../media';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;
  media$: Observable<Media>;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post$ = this.route.queryParamMap.pipe(map(params => JSON.parse(params.get('post'))));
    this.media$ = this.route.queryParamMap.pipe(map(params => JSON.parse(params.get('media'))));

  }

}

