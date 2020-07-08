import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsCategoriesComponent } from './posts-categories.component';

const routes: Routes = [
  {
    path: '',
    component: PostsCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {

}