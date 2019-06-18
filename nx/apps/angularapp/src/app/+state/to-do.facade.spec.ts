import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { ToDo, ToDoGroupId } from '@nx/data';

import { ToDoLoaded } from './to-do.actions';
import { ToDoEffects } from './to-do.effects';
import { ToDoFacade } from './to-do.facade';
import { initialState, toDoReducer, ToDoState } from './to-do.reducer';
import { HttpClientModule } from '@angular/common/http';
import { SpecUtils } from '../utils/spec.utils';

interface TestSchema {
  toDo: ToDoState;
}

describe('ToDoFacade', () => {
  let facade: ToDoFacade;
  let store: Store<TestSchema>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('toDo', toDoReducer, { initialState }),
          EffectsModule.forFeature([ToDoEffects])
        ],
        providers: [ToDoFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
          HttpClientModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ToDoFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allToDo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allToDo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ToDoLoaded` to manually submit list for state management
     */
    it('allToDo$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allToDo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new ToDoLoaded(SpecUtils.createToDoGroups())
        );

        list = await readFirst(facade.allToDo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(4);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
