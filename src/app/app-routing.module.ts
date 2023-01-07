import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/features.module').then((m) => m.FeaturesModule),
      },
      {
        path:'yyaasshhaarr',
        component:LoginComponent
      }
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top', anchorScrolling:'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
