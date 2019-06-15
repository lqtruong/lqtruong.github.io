import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TruongithubSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { GhProjectModule } from '../projects';

@NgModule({
  imports: [TruongithubSharedModule, RouterModule.forChild([HOME_ROUTE]), GhProjectModule],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TruongithubHomeModule {}
