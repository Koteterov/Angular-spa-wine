import { IUser } from '../core/interfaces/user';

export * from './reducer';
export * from './actions';

export interface IRootState {
  currentUser: IUser | undefined;
}
