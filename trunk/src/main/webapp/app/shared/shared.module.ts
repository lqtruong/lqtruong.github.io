import { NgModule } from '@angular/core';
import { MyhmpSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

import { MaterialModule } from './modules/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MCardComponent } from './components/m-card/m-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [MyhmpSharedLibsModule, MaterialModule, LazyLoadImageModule, FlexLayoutModule],
  declarations: [
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    MCardComponent
  ],
  entryComponents: [LoginModalComponent],
  exports: [
    MyhmpSharedLibsModule,
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    MaterialModule,
    MCardComponent,
    LazyLoadImageModule,
    FlexLayoutModule
  ]
})
export class MyhmpSharedModule {}
