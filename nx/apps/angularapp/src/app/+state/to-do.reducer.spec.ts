import { SpecUtils } from '../utils/spec.utils';
import { ToDoLoaded } from './to-do.actions';
import { initialState, toDoReducer, ToDoState } from './to-do.reducer';
import { ToDoGroupId } from '@nx/data';

describe('ToDo Reducer', () => {
  describe('valid ToDo actions ', () => {
    it('should return set the list of known ToDo', () => {
      const action = new ToDoLoaded(SpecUtils.createToDoGroups());
      const state: ToDoState = toDoReducer(initialState, action);
      const selId = ToDoGroupId.do;

      expect(state.loaded).toBe(true);
      expect(state.ids.length).toBe(4);
      expect(Object.keys(state.entities).length).toBe(4);
      expect(state.entities[selId]).toBeTruthy();
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = toDoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
