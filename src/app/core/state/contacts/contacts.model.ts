export class Contact {
  id: number;
  name: string;
  phone: string;

  constructor(id: number, name: string, phone: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

export interface INewContact extends Omit<Contact, 'id'> {}
