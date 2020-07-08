import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-categories-routing.module';
import { PostsCategoriesComponent } from './posts-categories.component';
import { PostModule } from '../post/post.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule,
        PostModule,
        NgbModule
    ],
    declarations: [PostsCategoriesComponent],
    exports: [PostsCategoriesComponent]
})
export class PostsCategoriesModule { }
