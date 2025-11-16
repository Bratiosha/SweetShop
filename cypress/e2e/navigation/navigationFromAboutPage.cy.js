import { base, pages } from '../../support/navigationHelper';

describe('TS_2.3 - Navigation from About Page', () => {
  it('TC_2.9 - Main page loads from About page correctly', () => {
    cy.navigateToPage(pages[2], pages[0]);
  });

  it('TC_2.10 - Sweets page loads from About page correctly', () => {
    cy.navigateToPage(pages[2], pages[1]);
  });

  it('TC_2.11 - Login page loads from About page correctly', () => {
    cy.navigateToPage(pages[2], pages[3]);
  });

  it('TC_2.12 - Basket page loads from About page correctly', () => {
    cy.navigateToPage(pages[2], pages[4]);
  });
});