import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IUser } from 'src/app/core/interfaces/user';
import { IWine } from 'src/app/core/interfaces/wine';

export const initialState = {
  likesList: 10,
//   _id: '',
//   _ownerId: { _id: '', firstName: '', lastName: '', email: '', password: '' },
//   name: '',
//   type: '',
//   origin: '',
//   price: '',
//   image: '',
//   description: '',
//   createdAt: '',
//   updatedAt: '',
};

@Injectable()
export class WineStore extends ComponentStore<any> {

    likes$ = this.select(state => state.likesList)

  constructor() {
    super(initialState);
  }

//   likeWine(wineId: IWine) {
//     this.setState({
//       likesList: [],
//       _id: '',
//       _ownerId: {
//         _id: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//       },
//       name: '',
//       type: '',
//       origin: '',
//       price: '',
//       image: '',
//       description: '',
//       createdAt: '',
//       updatedAt: '',
//     });
//   }

// likeWine ( ) {
  
//     // this.setState((state: any) => state)
    
    
// }


}
