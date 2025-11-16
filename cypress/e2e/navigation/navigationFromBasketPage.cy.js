import { base, pages } from '../../support/navigationHelper';

describe('TS_2.5 - Navigation from Basket Page', () => {
  it('TC_2.17 - Main page loads from Basket page correctly', () => {
    cy.navigateToPage(pages[4], pages[0]);
  });

  it('TC_2.18 - Sweets page loads from Basket page correctly', () => {
    cy.navigateToPage(pages[4], pages[1]);
  });

  it('TC_2.19 - About page loads from Basket page correctly', () => {
    cy.navigateToPage(pages[4], pages[2]);
  });

  it('TC_2.20 - Login page loads from Basket page correctly', () => {
    cy.navigateToPage(pages[4], pages[3]);
  });
});