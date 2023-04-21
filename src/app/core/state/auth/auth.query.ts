import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppState, AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AppState> {

  constructor(protected override store: AuthStore) {
    super(store);
  }
}
