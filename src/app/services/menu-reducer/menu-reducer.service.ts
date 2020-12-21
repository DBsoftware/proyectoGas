import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import { State} from '../../store/reducers/menu.reducer';
import {MenuService} from '../menu/menu.service';

@Injectable()
export class MenuReducerService {
/*  constructor(private store: Store<State>,
              private _menu: MenuService) { }


  dispatch(id: number, payload?: any ) {
    let useAction: any;
    switch (id) {
      case 1:
        useAction = new fromActions.LoadActiveInput(payload);
        break;
      case 2:
        useAction = new fromActions.UnLoadActiveInput();
        break;
    }
    this.store.dispatch( useAction );
  }

  getMenu() {
    return this.store.select(fromAI.getMenu);
  }
  loadMenu(obj) {
    this._menu.getUserMenu(1);
    this.dispatch(1, obj);
  } */

}
