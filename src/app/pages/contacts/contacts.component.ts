import {Component, Inject, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Contact} from '@core/state/contacts/contacts.model';
import {ContactsQuery} from '@core/state/contacts/contacts.query';
import {ContactsService} from '@core/services/contacts/contacts.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreateUpdateComponent} from './components/create-update/create-update.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(
    private query: ContactsQuery,
    private service: ContactsService,
    public dialog: MatDialog
  ) {
    this.contacts$ = this.query.select().pipe(map((data) => data.contacts));
  }

  ngOnInit() {
    this.service.loadContacts();
  }

  edit(contact: Contact): void {
    this.dialog.open(CreateUpdateComponent, {
      data: {
        ...contact
      },
    });
  }

  remove(contact: Contact): void {
    this.service.removeContact(contact);
  }

  create(): void {
    this.dialog.open(CreateUpdateComponent, {
      data: null
    });
  }
}


