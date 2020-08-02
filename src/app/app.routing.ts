import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', 
        loadChildren: () => import('../app/content/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'form-layouts', loadChildren: () => import('../app/content/forms/form-layouts/form-layouts.module')
        .then(m => m.FormLayoutsModule),
        canActivate: [AuthGuard]
      },      
      {
        path: 'form-elements', loadChildren: () => import('../app/content/forms/form-elements/form-elements.module')
        .then(m => m.FormElementsModule),
        canActivate: [AuthGuard]
      },      
      {
        path: 'form-wizard', loadChildren: () => import('../app/content/forms/form-wizard/form-wizard.module')
        .then(m => m.FormWizardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'form-repeater', loadChildren: () => import('../app/content/forms/form-repeater/form-repeater.module')
        .then(m => m.FormRepeaterModule),
        canActivate: [AuthGuard]
      }
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard/sales' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
