import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { ToDoModule } from '@nx/to-do';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import { ToDoEffects } from './+state/to-do.effects';
import { ToDoFacade } from './+state/to-do.facade';
import { initialState as toDoInitialState, toDoReducer } from './+state/to-do.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { toDo: toDoReducer },
      {
        initialState: { toDo: toDoInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([ToDoEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    ToDoModule
  ],
  providers: [ToDoFacade],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
