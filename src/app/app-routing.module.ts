import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },

  {
    path: 'posts/:slug',
    loadChildren: () => import('./posts-categories/posts-categories.module').then(m => m.PostsCategoriesModule)
  },
  {
    path: 'post/:slug',
    loadChildren: () => import('./post-page/post-page.module').then(m => m.PostPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }