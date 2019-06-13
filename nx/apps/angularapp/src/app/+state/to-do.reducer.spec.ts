import { ToDoLoaded } from './to-do.actions';
import { ToDoState, Entity, initialState, toDoReducer } from './to-do.reducer';

describe('ToDo Reducer', () => {
  const getToDoId = it => it['id'];
  let createToDo;

  beforeEach(() => {
    createToDo = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ToDo actions ', () => {
    it('should return set the list of known ToDo', () => {
      const toDos = [createToDo('PRODUCT-AAA'), createToDo('PRODUCT-zzz')];
      const action = new ToDoLoaded(toDos);
      const result: ToDoState = toDoReducer(initialState, action);
      const selId: string = getToDoId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
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
