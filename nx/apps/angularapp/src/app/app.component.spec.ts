import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToDoFacade } from './+state/to-do.facade';
import { NxModule } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { toDoReducer, initialState as toDoInitialState } from './+state/to-do.reducer';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { ToDoEffects } from './+state/to-do.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientModule,
        NxModule.forRoot(),
        StoreModule.forRoot(
          { toDo: toDoReducer },
          {
            initialState: { toDo: toDoInitialState }
          }
        ),
        EffectsModule.forRoot([ToDoEffects])
      ],
      declarations: [AppComponent],
      providers: [ToDoFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angularapp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenRenderingDone().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        'Welcome to angularapp!!!'
      );
    });
  });
});
