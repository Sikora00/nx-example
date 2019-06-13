import { Entity, ToDoState } from './to-do.reducer';
import { toDoQuery } from './to-do.selectors';

describe('ToDo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getToDoId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createToDo = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      toDo: {
        list: [
          createToDo('PRODUCT-AAA'),
          createToDo('PRODUCT-BBB'),
          createToDo('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ToDo Selectors', () => {
    it('getAllToDo() should return the list of ToDo', () => {
      const results = toDoQuery.getAllToDo(storeState);
      const selId = getToDoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedToDo() should return the selected Entity', () => {
      const result = toDoQuery.getSelectedToDo(storeState);
      const selId = getToDoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = toDoQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = toDoQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
