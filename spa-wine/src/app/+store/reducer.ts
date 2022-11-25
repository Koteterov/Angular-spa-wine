import { createReducer, on } from '@ngrx/store';
import { IUser } from '../core/interfaces/user';
import { login, logout } from './actions';

export const currentUserReducer = createReducer<IUser | undefined>(
  undefined,
  on(login, (_, action) => action.user),
  on(logout, () => undefined)
);
