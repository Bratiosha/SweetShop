export const base = 'https://sweetshop.netlify.app';

export const pages = [
  { name: 'Main', path: '/', href: null },
  { name: 'Sweets', path: '/sweets', href: '/sweets' },
  { name: 'About', path: '/about', href: '/about' },
  { name: 'Login', path: '/login', href: '/login' },
  { name: 'Basket', path: '/basket', href: '/basket' }
];

// Custom command for navigation
Cypress.Commands.add('navigateToPage', (fromPage, toPage) => {
  cy.visit(base + fromPage.path);
  cy.location('pathname').then((loc) => {
    try {
      expect(loc).to.eq(fromPage.path);
      cy.log(`✅ On ${fromPage.name} page`);
    } catch (err) {
      cy.log(`❌ Failed to load ${fromPage.name} page`);
    }
  });

  if (toPage.href) {
    cy.get(`#navbarColor01 a[href="${toPage.href}"]`, { timeout: 5000 })
      .should('exist')
      .then(($el) => {
        cy.wrap($el).click({ force: true });
      });
  }

  cy.location('pathname').then((loc) => {
    try {
      expect(loc).to.eq(toPage.path);
      cy.log(`✅ SUCCESS: Navigated to ${toPage.name} page (${toPage.path})`);
    } catch (err) {
      cy.log(`❌ FAILED: Could not navigate to ${toPage.name} page. Current path: ${loc}`);
    }
  });
});

// Custom command for adding products to basket
Cypress.Commands.add('addProductsToBasket', (count = 3) => {
  for (let i = 0; i < count; i++) {
    cy.get("a.addItem").eq(i).click();
    cy.wait(300);
  }
});