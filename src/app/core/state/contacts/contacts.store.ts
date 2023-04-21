import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {Contact} from '@core/state/contacts/contacts.model';

export interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: []
};

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'contacts'})
export class ContactsStore extends Store<ContactsState> {
  constructor() {
    super(initialState);
  }
}
