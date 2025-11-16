import { base, pages } from '../../support/navigationHelper';

describe('TS_2.2 - Navigation from Sweets Page', () => {
  it('TC_2.5 - Main page loads from Sweets page correctly', () => {
    cy.navigateToPage(pages[1], pages[0]);
  });

  it('TC_2.6 - About page loads from Sweets page correctly', () => {
    cy.navigateToPage(pages[1], pages[2]);
  });

  it('TC_2.7 - Login page loads from Sweets page correctly', () => {
    cy.navigateToPage(pages[1], pages[3]);
  });

  it('TC_2.8 - Basket page loads from Sweets page correctly', () => {
    cy.navigateToPage(pages[1], pages[4]);
  });
});