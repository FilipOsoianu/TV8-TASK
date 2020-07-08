import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';
import { PostService } from './post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV8-CLONE';
  categories$: Observable<Categories[]>
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categories$ = this.postService.getCategories();
  }
  onTap(categorie: string) {
    this.router.navigate(["posts/" + categorie]);
  }

  Home() {
    this.router.navigate([""]);
  }

}