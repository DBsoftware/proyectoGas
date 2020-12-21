import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
    getItem(item: string): Promise<string | null> {
      if (typeof Storage !== 'undefined') {
        return new Promise((resolve, reject) => {
          if (localStorage.getItem(item)) {
            resolve(localStorage.getItem(item));
          } else {
            resolve(null);
          }
        });
      }
      return null;
    }
    setItem(key: string, value: string) {
      if (typeof Storage !== 'undefined') {
         localStorage.setItem(key, value);
         return new Promise((resolve, reject) => {
           if (localStorage.getItem(key)) {
             resolve();
           } else {
             resolve(null);
           }
         });
      }
      return null;
    }
    removeItem(key: string) {
      if (typeof Storage !== 'undefined') {
        localStorage.removeItem(key);
        return new Promise((resolve, reject) => {
          if (localStorage.getItem(key)) {
            resolve(null);
          } else {
            resolve();
          }
        });
      }
      return null;
    }
}
