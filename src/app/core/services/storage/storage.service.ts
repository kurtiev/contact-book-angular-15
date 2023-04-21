import {Injectable} from '@angular/core';
import {StorageKeywords} from '@core/services/storage/storage-keywords';

export enum StorageType {
  localStorage,
  sessionStorage,
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public prefix = 'contact-book_';
  private defaultStorageType: StorageType = StorageType.localStorage;

  constructor() {
  }

  public read(key: StorageKeywords, storageType: StorageType = this.defaultStorageType): { [key: string]: any } | undefined {
    const data = this.getStorage(storageType).getItem(this.prefix + key);
    if (data != null) {
      return JSON.parse(data);
    }
    return;
  }

  public write(key: StorageKeywords, value: any, storageType: StorageType = this.defaultStorageType): void {
    this.getStorage(storageType).setItem(
      this.prefix + key,
      JSON.stringify(value)
    );
  }

  public remove = (key: StorageKeywords, storageType: StorageType = this.defaultStorageType) =>
    this.getStorage(storageType).removeItem(this.prefix + key);

  private getStorage(storageType: StorageType = this.defaultStorageType): any {
    switch (storageType) {
      case StorageType.localStorage:
        return localStorage;
      case StorageType.sessionStorage:
        return sessionStorage;
    }
  }
}
