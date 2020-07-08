import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts-categories',
  templateUrl: './posts-categories.component.html',
  styleUrls: ['./posts-categories.component.css']
})
export class PostsCategoriesComponent implements OnInit {

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


}
