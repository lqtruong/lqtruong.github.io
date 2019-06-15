import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TruongithubSharedModule, MaterialModule } from '../shared';
import { PORTFOLIO_ROUTE, PortfolioComponent } from './';
@NgModule({
  imports: [TruongithubSharedModule, RouterModule.forChild([PORTFOLIO_ROUTE]), MaterialModule],
  declarations: [PortfolioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PortfolioComponent]
})
export class PortfolioModule {}
