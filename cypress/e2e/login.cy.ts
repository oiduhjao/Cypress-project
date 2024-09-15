import { LoginPage } from '../page_Objects/index';

describe('Positive scenarios', () => {

  before(() => {
    cy.clearAllBrowserData();
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Succesful login', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.login(
        creds.users.standard.username,
        creds.users.standard.password
      );
    });
    cy.url().should('include', '/inventory');
  });
});

describe('Negative scenarios', () => {

  before(() => {
    cy.clearAllBrowserData();
  })

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('No credentials provided', () => {
    LoginPage.login();
    cy.get(LoginPage.errorMessageContainer)
      .contains('Epic sadface: Username is required')
      .should('be.visible');
  });

  it('Only username provided', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.login(creds.users.standard.username);
      cy.get(LoginPage.errorMessageContainer)
        .contains('Epic sadface: Password is required')
        .should('be.visible');
    });
  });

  it('Only password provided', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.login('', creds.users.standard.password);
      cy.get(LoginPage.errorMessageContainer)
        .contains('Epic sadface: Username is required')
        .should('be.visible');
    });
  });

  it('Bad password provided', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.login('BadUsername', creds.users.standard.password);
      cy.get(LoginPage.errorMessageContainer)
        .contains('Epic sadface: Username and password do not match any user in this service')
        .should('be.visible');
    });
  });

  it('Locked out user ', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.login(creds.users.locked.username, creds.users.locked.password);
      cy.get(LoginPage.errorMessageContainer)
        .contains('Epic sadface: Sorry, this user has been locked out.')
        .should('be.visible');
    });
  });
});
