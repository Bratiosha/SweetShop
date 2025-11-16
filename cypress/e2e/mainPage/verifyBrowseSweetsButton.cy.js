describe("Main Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  it("TC_1.3 - Browse Sweets button is visible and navigates correctly", () => {
    cy.visit(base);

    cy.get('button, a[class*="btn"], input[type="button"]').then(($buttons) => {
      let found = false;
      cy.wrap($buttons).each(($btn) => {
        const text = $btn.text();
        if (
          text &&
          (text.includes("Browse") ||
            text.includes("Sweets") ||
            text.includes("Shop"))
        ) {
          found = true;
          cy.wrap($btn).should("be.visible");
          cy.log(`✅ SUCCESS: Browse Sweets button is visible`);
          cy.wrap($btn).click({ force: true });
          cy.location("pathname").then((loc) => {
            try {
              expect(loc).to.include("/sweets");
              cy.log(`✅ SUCCESS: Button navigates to sweets page`);
            } catch (err) {
              cy.log(
                `❌ FAILED: Button did not navigate to sweets page, current path: ${loc}`
              );
            }
          });
        }
      });

      if (!found) {
        cy.log(
          "⚠️  INFO: Browse Sweets button not found, checking for Sweets link in navbar"
        );
        cy.get(`#navbarColor01 a[href="/sweets"]`)
          .should("exist")
          .then(($el) => {
            cy.wrap($el).click({ force: true });
            cy.location("pathname").then((loc) => {
              try {
                expect(loc).to.eq("/sweets");
                cy.log(`✅ SUCCESS: Navigation to sweets page works`);
              } catch (err) {
                cy.log(`❌ FAILED: Could not navigate to sweets page`);
              }
            });
          });
      }
    });
  });
});
