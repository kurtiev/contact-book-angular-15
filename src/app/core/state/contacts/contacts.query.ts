import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {ContactsState, ContactsStore} from './contacts.store';

@Injectable({
  providedIn: 'root'
})
export class ContactsQuery extends Query<ContactsState> {

  constructor(protected override store: ContactsStore) {
    super(store);
  }
}
