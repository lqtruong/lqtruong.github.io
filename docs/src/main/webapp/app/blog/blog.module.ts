import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TruongithubSharedModule, MaterialModule } from '../shared';
import { BLOG_ROUTE, BlogComponent } from './';
@NgModule({
  imports: [TruongithubSharedModule, RouterModule.forChild([BLOG_ROUTE]), MaterialModule],
  declarations: [BlogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BlogComponent]
})
export class BlogModule {}
