describe("TS_7 - Basket Functionality Verification", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  it("TC_7.6 - Verify return to basket when clicking 'Cancel' on confirm dialog", () => {
    for (let i = 0; i < 2; i++) {
      cy.get("a.addItem").eq(i).click();
      cy.wait(300);
    }

    cy.get('a[href="/basket"]').click();
    cy.wait(500);

    cy.get("#basketCount")
      .invoke("text")
      .then((count) => {
        const initialCount = parseInt(count);
        cy.wrap(initialCount).as("initialCount");
      });

    cy.contains("a", "Empty Basket").click();

    cy.on("window:confirm", () => false);

    cy.wait(500);

    cy.get("@initialCount").then((initialCount) => {
      cy.get("#basketCount").should("contain", initialCount.toString());
    });

    cy.get("#basketItems li")
      .not(":contains('Total')")
      .should("have.length.greaterThan", 0);

    cy.log("✅ Cancel confirmed - basket remained unchanged");
  });
});
