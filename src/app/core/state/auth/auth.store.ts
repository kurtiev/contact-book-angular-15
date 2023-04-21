import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {IAuthToken} from '@core/services/auth/auth.interfaces';

export interface AppState {
  token?: IAuthToken;
  isAuthenticated: boolean;
}

const initialState: AppState = {
  token: undefined,
  isAuthenticated: false,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AppState> {
  constructor() {
    super(initialState);
  }
}
