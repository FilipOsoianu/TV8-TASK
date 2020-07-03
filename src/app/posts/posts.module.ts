import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostModule } from '../post/post.module';

@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule,
        PostModule
    ],
    declarations: [PostsComponent],
    exports: [PostsComponent]
})
export class PostsModule { }
