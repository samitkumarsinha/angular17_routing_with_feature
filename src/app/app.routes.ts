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

//--------------------important---------------------
if we want to skip site component then use this 
export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'task', component: TaskComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule),
  },
];
//----------------------------inside menu component-----------------------------
<div>
  <span><a routerLink='/user'> User</a> </span> |
  <span><a routerLink='/task'> Task</a> </span>
</div>
<div>
  <router-outlet></router-outlet>
</div>
//---------------------------------------------------------------------------------
