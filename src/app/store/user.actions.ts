import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserService} from '../apis/user.service';

export const FETCH_USERS = 'fetchUsers';
export const ADD_USER = 'addUser';
export const SAVE_USERS = 'saveUsers';

const saveUsersCreator = users => ({
  type: SAVE_USERS,
  users,
});

const addUserCreator = user => ({
  type: ADD_USER,
  user,
});

@Injectable()
export class UserActions {
  constructor(private store: Store<any>,
              private userApi: UserService) {

  }

  fetchUsers() {
    this.userApi.getUsers().subscribe(res => {
      this.store.dispatch(saveUsersCreator(res));
    });
  }

  addUser(user) {
    this.store.dispatch(addUserCreator(user));
  }
}
