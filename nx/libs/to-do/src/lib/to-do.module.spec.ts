import { async, TestBed } from '@angular/core/testing';
import { ToDoModule } from './to-do.module';

describe('ToDoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToDoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ToDoModule).toBeDefined();
  });
});
