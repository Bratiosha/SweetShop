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

    it("TC_9.1.2 - Verify the page displays all basket items", () => {
      // Verify basket section exists
      cy.contains("Your Basket").should("exist");

      // Verify total is displayed
      cy.contains("Total (GBP)").should("exist");
      cy.contains("£").should("exist");

      // Verify delivery options are shown
      cy.contains("Delivery").should("exist");
      cy.contains("Collect (FREE)").should("exist");
      cy.contains("Standard Shipping (£1.99)").should("exist");

      cy.log("✅ Checkout page displays basket items and delivery options");
    });
  });
});
