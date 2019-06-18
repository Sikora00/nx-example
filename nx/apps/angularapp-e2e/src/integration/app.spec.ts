import { getTitle, getTodos, getAddTodoInput } from '../support/app.po';

describe('angularapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display The Eisenhower Matrix', () => {
    getTitle().contains('The Eisenhower Matrix');
  });

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoInput().type('Test').type('{enter}');
    getTodos().should(t => expect(t.length).equal(3));
  });
});
