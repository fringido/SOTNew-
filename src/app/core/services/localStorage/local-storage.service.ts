import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  setItems(obj: object) {
    for (const [key, value] of Object.entries(obj)) {
      this.setItem(key, value);
    }
  }

  clear() {
    localStorage.clear();
  }
}
