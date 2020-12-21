import * as MenuActions from '../actions/menu.actions';

export interface State {
  menu: any;
}

const initialState: State = {
  menu: null
};

export function reducer(state = initialState, action: MenuActions.MActions ): State {
  switch (action.type) {
    case MenuActions.MActionTypes.LOAD_MENU: {
      return {
        menu: [...action.payload]
      };
    }

    case MenuActions.MActionTypes.UNLOAD_MENU: {
      return {
        menu: []
      };
    }

    default: {
      return state;
    }
  }
}
/*
export const getMenu =
  createSelector( createFeatureSelector<FormState>('Menu') , (state: FormState) => state.menu );
 */
