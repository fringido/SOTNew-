import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private showLoaderSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private showLoaderState = false;

  constructor() {}

    getShowLoader(): Observable<boolean> {
      return this.showLoaderSubject.asObservable()
    }

    hideLoader() {
      this.showLoaderState = false;
      this.showLoaderSubject.next(this.showLoaderState);
    }

    showLoader() {
      this.showLoaderState = true;
      this.showLoaderSubject.next(this.showLoaderState);
    }

}
