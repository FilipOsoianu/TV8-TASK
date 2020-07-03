import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './post-page.component';

@NgModule({
  imports: [
    CommonModule,
    PostPageRoutingModule
  ],
  declarations: [PostPageComponent],
  exports: [PostPageComponent]
})
export class PostPageModule { }
