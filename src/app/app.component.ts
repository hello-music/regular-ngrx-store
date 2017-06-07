import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserActions} from './store/user.actions';
import {getUsers} from './store/counter';

const newUser = {
  name: 'new',
  age: '19'
};

interface AppState {
  counter: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users;

  constructor(private store: Store<AppState>,
              private userActions: UserActions,
  ) {
    this.users = store.select(getUsers);
  }

  ngOnInit() {
    this.userActions.fetchUsers();
  }

  addToStore() {
    this.userActions.addUser(newUser);
  }
}
