import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setItem<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | {} {
    return JSON.parse(sessionStorage.getItem(key) || '{}');
  }

  setItems(obj: object) {
    for (const [key, value] of Object.entries(obj)) {
      this.setItem(key, value);
    }
  }

  clear() {
    sessionStorage.clear();
  }
}
