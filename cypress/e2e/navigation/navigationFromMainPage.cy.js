import { base, pages } from '../../support/navigationHelper';

describe('TS_2.1 - Navigation from Main Page', () => {
  it('TC_2.1 - Sweets page loads from main page correctly', () => {
    cy.navigateToPage(pages[0], pages[1]);
  });

  it('TC_2.2 - About page loads from main page correctly', () => {
    cy.navigateToPage(pages[0], pages[2]);
  });

  it('TC_2.3 - Login page loads from main page correctly', () => {
    cy.navigateToPage(pages[0], pages[3]);
  });

  it('TC_2.4 - Basket page loads from main page correctly', () => {
    cy.navigateToPage(pages[0], pages[4]);
  });
});