import {Injectable} from '@angular/core';
import {StorageService} from '@core/services/storage/storage.service';
import {StorageKeywords} from '@core/services/storage/storage-keywords';
import {AuthStore} from '@core/state/auth/auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private storage: StorageService,
    private store: AuthStore,
  ) {
  }

  get isAuthenticated(): boolean {
    return this.store.getValue().isAuthenticated;
  }

  login(email: string, pass: string): void {
    this.storage.write(StorageKeywords.session, {email, pass});
    this.store.update({isAuthenticated: true});
  }

  logout(): void {
    this.storage.remove(StorageKeywords.session);
    this.store.update({isAuthenticated: false});
  }

  checkAuthStatus(): void {
    const session = this.storage.read(StorageKeywords.session);
    if (session) {
      this.store.update({isAuthenticated: true});
    }
  }
}
