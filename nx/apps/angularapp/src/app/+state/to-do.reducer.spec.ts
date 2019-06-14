import { ToDoLoaded } from './to-do.actions';
import { ToDoState, initialState, toDoReducer } from './to-do.reducer';
import { ToDo } from '@nx/data';

describe('ToDo Reducer', () => {
  let createToDo;

  beforeEach(() => {
    createToDo = (id: string, title = ''): ToDo => ({
      id,
       title: title || `name-${id}`
    });
  });

  describe('valid ToDo actions ', () => {
    it('should return set the list of known ToDo', () => {
      const toDos = [createToDo('PRODUCT-AAA'), createToDo('PRODUCT-zzz')];
      const action = new ToDoLoaded(toDos);
      const state: ToDoState = toDoReducer(initialState, action);
      const selId = 'PRODUCT-zzz';

      expect(state.loaded).toBe(true);
      expect(state.ids.length).toBe(2);
      expect(Object.keys(state.entities).length).toBe(2);
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
