import { Route } from '@angular/router';

import { GhProjectComponent } from './';

export const PROJECTS_ROUTE: Route = {
  path: 'projects',
  component: GhProjectComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
