import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TruongithubSharedModule, MaterialModule } from '../shared';
import { CONTACT_ROUTE, ContactComponent } from './';
@NgModule({
  imports: [TruongithubSharedModule, RouterModule.forChild([CONTACT_ROUTE]), MaterialModule],
  declarations: [ContactComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ContactComponent]
})
export class ContactModule {}
