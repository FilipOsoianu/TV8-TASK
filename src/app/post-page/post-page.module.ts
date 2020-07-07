import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './post-page.component';
import { SafePipe } from '../safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    PostPageRoutingModule,

  ],
  declarations: [PostPageComponent,
    SafePipe,
  ],
  exports: [PostPageComponent]
})
export class PostPageModule { }
