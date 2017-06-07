import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('assets/data/users.json').map((res: Response) => {
      return res.json();
    });
  }
}
