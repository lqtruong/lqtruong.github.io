import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TruongithubSharedModule, MaterialModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { GhProjectModule } from '../projects';
import { GhProjectService } from '../core';

@NgModule({
  imports: [TruongithubSharedModule, RouterModule.forChild([HOME_ROUTE]), GhProjectModule, MaterialModule],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GhProjectService]
})
export class TruongithubHomeModule {}
