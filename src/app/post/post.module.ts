import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PostsRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [PostComponent],
    exports: [PostComponent]
})
export class PostModule { }