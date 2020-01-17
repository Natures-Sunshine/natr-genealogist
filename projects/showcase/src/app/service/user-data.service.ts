import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) {
  }

  getUserInfo(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/assets/user-info.json');
  }
}
