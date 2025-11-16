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

    it("TC_9.2.3 - Verify checkout was successful", () => {
      cy.get("input#name").eq(0).type("John");
      cy.get("input#name").eq(1).type("Doe");
      cy.get("input#email").clear().type("john.doe@example.com");
      cy.get("input#address").clear().type("123 Main Street");
      cy.get("input#address2").clear().type("Apt 4B");
      cy.get("select#country").select(1);
      cy.get("select#city").select(1);
      cy.get("input#zip").type("SW1A1AA");
      cy.get("input#cc-name").type("John Doe");
      cy.get("input#cc-number").type("4111111111111111");
      cy.get("input#cc-expiration").type("12/25");
      cy.get("input#cc-cvv").type("123");

      cy.get('button[type="submit"]').contains("Continue to checkout").click();

      cy.wait(2000);

      cy.url().should("match", /success|confirmation|thank-you|order/i);

      cy.log("✅ Checkout completed successfully");
    });
  });
});
