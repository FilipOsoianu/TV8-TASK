import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-posts-categories',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  categorie: string;

  private currentPage: number = 1;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  active = 1
  ngOnInit(): void {
    this.categorie = this.route.snapshot.paramMap.get('slug');
    this.getPosts(this.currentPage, this.categorie);
  }

  getPosts(page: number, categories?: string): void {
    this.postService.getPosts(page, categories).subscribe(nextPage => {
      this.posts = this.posts.concat(nextPage);
    });
    this.currentPage++;
  }

  getNextPage(): void {
    this.getPosts(this.currentPage, this.categorie);
  }

  onScroll() {
      this.getNextPage();
   }

}
