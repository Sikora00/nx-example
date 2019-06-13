import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ToDoEffects } from './to-do.effects';
import { LoadToDo, ToDoLoaded } from './to-do.actions';

describe('ToDoEffects', () => {
  let actions: Observable<any>;
  let effects: ToDoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ToDoEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ToDoEffects);
  });

  describe('loadToDo$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadToDo() });
      expect(effects.loadToDo$).toBeObservable(
        hot('-a-|', { a: new ToDoLoaded([]) })
      );
    });
  });
});
