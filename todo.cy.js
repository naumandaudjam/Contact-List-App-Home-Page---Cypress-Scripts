
describe('Contact List Application Tests', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
  });
  it('Visits the contact list page and verifies elements', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.contains('Contact List').should('be.visible');
  });
  it('Adds a new contact', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('+1234567890');
    
  });
  it('Adds a new contact', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('#signup').click();    
  });
  it('API Documentation Link', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('#signup').click();    
  });
  it('Checks if footer contains copyright information', () => {
    cy.contains('footer', 'Created by Kristin Jackvony, Copyright 2021').should('be.visible');
  });
  it('Checks if the page has main heading', () => {
    cy.contains('h1', 'Contact List App').should('be.visible');
  });
  it('Checks if the page has welcome message', () => {
    cy.contains('.welcome-message', 'Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.').should('be.visible');
  });
});