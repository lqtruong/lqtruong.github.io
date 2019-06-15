import { Route } from '@angular/router';

import { ContactComponent } from './';

export const CONTACT_ROUTE: Route = {
  path: '',
  component: ContactComponent,
  data: {
    authorities: [],
    pageTitle: 'contact.title'
  }
};
