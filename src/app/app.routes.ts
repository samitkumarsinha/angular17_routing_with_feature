import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { UserModule } from './user/user.module';
import { MenuComponent } from './menu/menu.component';
import { SiteComponent } from './site/site.component';

export const routes: Routes = [
  {path: 'site', component: SiteComponent, children: [
    {path: 'comp1', component: Comp1Component},
    {path: 'comp2', component: Comp2Component},
  ]},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];
