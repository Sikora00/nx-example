import { toDoQuery } from './to-do.selectors';
import { ToDo } from '@nx/data';

describe('ToDo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getToDoId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createToDo = (id: string, title = ''): ToDo => ({
      id,
      title: name || `name-${id}`
    });
    const ids = ['AAA', 'BBB', 'CCC'];
    storeState = {
      toDo: {
        ids,
        entities: ids.reduce((map, id) => {
          map[id] = createToDo(id);
          return map;
        }, {}),
        selectedId: 'BBB',
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
      expect(selId).toBe('BBB');
    });

    it('getSelectedToDo() should return the selected Entity', () => {
      const result = toDoQuery.getSelectedToDo(storeState);
      const selId = getToDoId(result);

      expect(selId).toBe('BBB');
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
