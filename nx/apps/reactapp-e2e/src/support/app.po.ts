export const getTitle = () => cy.get('h1');

export const getTodos = () => cy.get('li');
export const getAddTodoInput = () => cy.get('input[type=text]').first();
