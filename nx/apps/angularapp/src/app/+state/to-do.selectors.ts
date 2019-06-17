import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, ToDoState } from './to-do.reducer';
import { adapter } from './to-do.reducer';
import { ToDoGroupId } from '@nx/data';

// Lookup the 'ToDo' feature state managed by NgRx
const getToDoState = createFeatureSelector<ToDoState>(TODO_FEATURE_KEY);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

const getLoaded = createSelector(
  getToDoState,
  (state: ToDoState) => state.loaded
);
const getError = createSelector(
  getToDoState,
  (state: ToDoState) => state.error
);

const getAllToDoGroups = createSelector(
  getToDoState,
  selectAll
);
const getGroups = createSelector(
  getToDoState,
  state => state.entities
);
const getDoGroup = createSelector(
  getGroups,
  groups => groups[ToDoGroupId.do]
);
const getScheduleGroup = createSelector(
  getGroups,
  groups => groups[ToDoGroupId.schedule]
);
const getDelegateGroup = createSelector(
  getGroups,
  groups => groups[ToDoGroupId.delegate]
);
const getEliminateGroup = createSelector(
  getGroups,
  groups => groups[ToDoGroupId.elimminate]
);
const getSelectedId = createSelector(
  getToDoState,
  (state: ToDoState) => state.selectedId
);
const getSelectedToDo = createSelector(
  getAllToDoGroups,
  getSelectedId,
  (toDo, id) => {
    const result = toDo.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const toDoQuery = {
  getLoaded,
  getError,
  getAllToDoGroups,
  getDoGroup,
  getScheduleGroup,
  getDelegateGroup,
  getEliminateGroup,
  getSelectedToDo
};
