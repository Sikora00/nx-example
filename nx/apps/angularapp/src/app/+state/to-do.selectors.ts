import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, ToDoState } from './to-do.reducer';
import { adapter } from './to-do.reducer';

// Lookup the 'ToDo' feature state managed by NgRx
const getToDoState = createFeatureSelector<ToDoState>(TODO_FEATURE_KEY);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

const getLoaded = createSelector(
  getToDoState,
  (state: ToDoState) => state.loaded
);
const getError = createSelector(
  getToDoState,
  (state: ToDoState) => state.error
);

const getAllToDo = createSelector(getToDoState, selectAll);
const getSelectedId = createSelector(
  getToDoState,
  (state: ToDoState) => state.selectedId
);
const getSelectedToDo = createSelector(
  getAllToDo,
  getSelectedId,
  (toDo, id) => {
    const result = toDo.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const toDoQuery = {
  getLoaded,
  getError,
  getAllToDo,
  getSelectedToDo
};
