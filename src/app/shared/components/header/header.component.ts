import {Component} from '@angular/core';
import {AuthService} from '@core/services/auth/auth.service';
import {Router} from '@angular/router';
import {ROUTES} from '../../../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate([`/${ROUTES.login}`]);
  }
}
