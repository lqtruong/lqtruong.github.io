import { Route } from '@angular/router';

import { PortfolioComponent } from './';

export const PORTFOLIO_ROUTE: Route = {
  path: '',
  component: PortfolioComponent,
  data: {
    authorities: [],
    pageTitle: 'portfolio.title'
  }
};
