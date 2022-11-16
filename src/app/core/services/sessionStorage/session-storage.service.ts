import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

    /**
   * Stores an item in sessionStorage
   *  @param {string}  key - key of sessionStorage Item.
   *  @param {T}  value - value of sessionStorage Item.
  */
  setItem<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Returns an item from sessionStorage, if the item does not exist returns an empty object
   *  @param {string}  key - key of sessionStorage Item.
  */
  getItem<T>(key: string): T | {} {
    return JSON.parse(sessionStorage.getItem(key) || '{}');
  }

  /**
   * Stores a bunch of items given an object
   *  @param obj
  */
  setItems(obj: {[key: string]: any}) {
    for (const [key, value] of Object.entries(obj)) {
      this.setItem(key, value);
    }
  }

  clear() {
    sessionStorage.clear();
  }
}
