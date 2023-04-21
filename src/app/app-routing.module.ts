import {inject, NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AuthService} from '@core/services/auth/auth.service';

const canActivate = () => {
  if (inject(AuthService).isAuthenticated) {
    return true;
  }
  return inject(Router).navigateByUrl(`/${ROUTES.login}`);
}

export const ROUTES = {
  home: '',
  login: 'login',
  contacts: 'contacts',
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full',
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [canActivate],
  },
  {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
