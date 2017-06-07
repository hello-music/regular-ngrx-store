import {ADD_USER, FETCH_USERS, SAVE_USERS} from './user.actions';
import {createSelector} from "reselect";

interface IState {
  users: any[];
}

const saveUsers = (state, users) => {
  return ({
    ...state,
    users
  });
};

const addUser = (state, user) => ({
  ...state,
  users: [
    ...state.users,
    user,
  ]
});

export const reducer = (state = <IState>{}, action) => {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action.user);
    case SAVE_USERS:
      return saveUsers(state, action.users);
    default:
      return state;
  }
};

export const getCounter = (state: any) => state.counter;

export const getUsers = createSelector(getCounter, (counter) => {
  return counter.users;
});
