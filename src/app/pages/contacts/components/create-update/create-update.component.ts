import {Component, Inject, OnInit} from '@angular/core';
import {ContactsService} from '@core/services/contacts/contacts.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Contact} from '@core/state/contacts/contacts.model';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss'],
})
export class CreateUpdateComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);

  constructor(
    private service: ContactsService,
    public dialogRef: MatDialogRef<CreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Contact,
  ) {
  }

  get isEdit(): boolean {
    return !!this.data;
  }

  save(name: string | null, phone: string | null): void {
    if (!name || !phone) {
      return;
    }
    const model = {
      name,
      phone,
    };
    if (this.isEdit) {
      const id = this.data?.id as number;
      this.service.updateContact({
        ...model,
        id,
      });
    } else {
      this.service.addContact({...model});
    }
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.data) {
      this.name.setValue(this.data.name);
      this.phone.setValue(this.data.phone);
    }
  }
}
