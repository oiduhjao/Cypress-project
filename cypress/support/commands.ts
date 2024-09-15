Cypress.Commands.add('clearAllInputFields', () => {
  cy.get('input').should('have.length.greaterThan', 0).then((inputs) => {
    for(let i = 0; i>inputs.length; i++){
      cy.get('input').eq(i).clear();
    }
  });
});

Cypress.Commands.add('clearAllBrowserData', () => {
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
  cy.clearAllCookies();
})

declare global {
  namespace Cypress {
    interface Chainable {
      clearAllInputFields(): Chainable<void>;
      clearAllBrowserData(): Chainable<void>;
    }
  }
}


export {};