import { Component } from '@angular/core';
import {AuthService} from '@core/services/auth/auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {ROUTES} from '../../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

  login(email: string, pass: string): void {
    if (!email || !pass) {
      return;
    }
    this.auth.login(email, pass);
    this.router.navigate([`/${ROUTES.contacts}`]);
  }
}
