import { base, pages } from '../../support/navigationHelper';

describe('TS_2.4 - Navigation from Login Page', () => {
  it('TC_2.13 - Main page loads from Login page correctly', () => {
    cy.navigateToPage(pages[3], pages[0]);
  });

  it('TC_2.14 - Sweets page loads from Login page correctly', () => {
    cy.navigateToPage(pages[3], pages[1]);
  });

  it('TC_2.15 - About page loads from Login page correctly', () => {
    cy.navigateToPage(pages[3], pages[2]);
  });

  it('TC_2.16 - Basket page loads from Login page correctly', () => {
    cy.navigateToPage(pages[3], pages[4]);
  });
});