describe("TS_9 - Checkout Process", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  describe("TS_9.1 - Checkout Page Load", () => {
    beforeEach(() => {
      for (let i = 0; i < 2; i++) {
        cy.get("a.addItem").eq(i).click();
        cy.wait(300);
      }
      cy.get('a[href="/basket"]').click();
      cy.wait(500);
    });

    it("TC_9.1.1 - Verify the checkout page is accessible", () => {
      cy.url().should("include", "/basket");
      cy.contains("h1, h2", "Your Basket").should("exist");
      cy.contains("Billing address").should("exist");
      cy.contains("Payment").should("exist");
      cy.get('button[type="submit"]')
        .contains("Continue to checkout")
        .should("exist");
      cy.log("✅ Checkout page is accessible");
    });
  });
});
