import { Route } from '@angular/router';

import { BlogComponent } from './blog.component';

export const BLOG_ROUTE: Route = {
  path: '',
  component: BlogComponent,
  data: {
    authorities: [],
    pageTitle: 'blog.title'
  }
};
