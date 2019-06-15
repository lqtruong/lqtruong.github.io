import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TruongithubSharedModule, MaterialModule } from '../shared';
import { PROJECTS_ROUTE, GhProjectComponent } from './';
@NgModule({
  imports: [TruongithubSharedModule, RouterModule.forChild([PROJECTS_ROUTE]), MaterialModule],
  declarations: [GhProjectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [GhProjectComponent]
})
export class GhProjectModule {}
