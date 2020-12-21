import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MActionTypes {
  LOAD_MENU = '[Class] LOAD_MENU',
  UNLOAD_MENU = '[Class] UNLOAD_MENU'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadMenu implements Action {
  readonly type = MActionTypes.LOAD_MENU;

  constructor(public payload: any) { }
}

export class UnloadMenu implements Action {
  readonly type = MActionTypes.UNLOAD_MENU;

  constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MActions
  = LoadMenu
  | UnloadMenu
  ;
