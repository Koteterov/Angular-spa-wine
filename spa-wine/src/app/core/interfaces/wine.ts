import { IUser } from "./user";

export interface IWine {
  likesList: IUser[];
  _id: string;
  _ownerId: IUser;
  name: string;
  type: string;
  origin: string;
  price: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
