import { ToDoAction, ToDoActionTypes } from './to-do.actions';
import { ToDo, ToDoGroup } from '@nx/data';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const TODO_FEATURE_KEY = 'toDo';

/**
 * Interface for the 'ToDo' data used in
 *  - ToDoState, and
 *  - toDoReducer
 *
 *  Note: replace if already defined in another module
 */

export interface ToDoState extends EntityState<ToDoGroup> {
  selectedId?: string | number; // which ToDo record has been selected
  loaded: boolean; // has the ToDo list been loaded
  error?: any; // last none error (if any)
}

export const adapter: EntityAdapter<ToDoGroup> = createEntityAdapter<ToDoGroup>();

export interface ToDoPartialState {
  readonly [TODO_FEATURE_KEY]: ToDoState;
}

export const initialState: ToDoState = adapter.getInitialState({
  ids: [],
  entities: [],
  loaded: false
});

export function toDoReducer(
  state: ToDoState = initialState,
  action: ToDoAction
): ToDoState {
  switch (action.type) {
    case ToDoActionTypes.ToDoLoaded: {
      state = { ...state,
        entities: action.payload,
        ids: Object.keys(action.payload),
        loaded: true };
      break;
    }
  }
  return state;
}
