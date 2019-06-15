import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          loadChildren: './admin/admin.module#TruongithubAdminModule'
        },
        {
          path: 'blog',
          loadChildren: './blog/blog.module#BlogModule'
        },
        {
          path: 'contact',
          loadChildren: './contact/contact.module#ContactModule'
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class TruongithubAppRoutingModule {}
