import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TruongithubSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TruongithubSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TruongithubSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TruongithubSharedModule {
  static forRoot() {
    return {
      ngModule: TruongithubSharedModule
    };
  }
}
