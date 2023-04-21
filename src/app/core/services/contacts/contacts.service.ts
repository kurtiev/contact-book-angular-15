import {Injectable} from '@angular/core';
import {ContactsStore} from '@core/state/contacts/contacts.store';
import {contacts} from '@core/services/contacts/contacts.mock';
import {Contact, INewContact} from '@core/state/contacts/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private store: ContactsStore,
  ) {
  }

  loadContacts() {
    this.store.update({
      contacts: [...contacts],
    });
  }

  addContact(contact: INewContact) {
    const contacts = this.store.getValue().contacts;
    this.store.update({
      contacts: [
        ...contacts,
        new Contact(this.getRandId(), contact.name, contact.phone),
      ],
    });
  }

  removeContact(contact: Contact) {
    const contacts = this.store.getValue().contacts.filter((item) => item.id !== contact.id);
    this.store.update({
      contacts,
    });
  }

  updateContact(contact: Contact) {
    const contacts = this.store.getValue().contacts;
    const index = contacts.findIndex((item) => item.id === contact.id);
    contacts[index] = contact;
    this.store.update({
      contacts,
    });
  }

  private getRandId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
