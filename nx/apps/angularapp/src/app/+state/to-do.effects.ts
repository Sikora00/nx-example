import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, switchMap, delay } from 'rxjs/operators';

import { ToDoPartialState, ToDoState } from './to-do.reducer';
import {
  LoadToDo,
  ToDoLoaded,
  ToDoLoadError,
  ToDoActionTypes,
  AddToDo,
  AddToDoSuccess
} from './to-do.actions';
import { BackendService } from '../services/backend.service';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class ToDoEffects {
  @Effect() addToDo$ = this.dataPersistence.pessimisticUpdate(
    ToDoActionTypes.AddToDo,
    {
      run: (action: AddToDo, state: ToDoPartialState) => {
        return this.backend.addToDo().pipe(map(created => new LoadToDo()));
      },
      onError: (a: AddToDo, e: any) => null
    }
  );

  @Effect() loadToDo$ = this.dataPersistence.fetch(ToDoActionTypes.LoadToDo, {
    run: (action: LoadToDo, state: ToDoPartialState) => {
      return this.backend.fetchTodo().pipe(map(t => new ToDoLoaded(t)));
    },

    onError: (action: LoadToDo, error) => {
      console.error('Error', error);
      return new ToDoLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private backend: BackendService,
    private dataPersistence: DataPersistence<ToDoPartialState>
  ) {}
}
