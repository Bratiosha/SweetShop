describe("TS_7 - Basket Functionality Verification", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  it("TC_7.5 - Empty basket and verify the basket is empty", () => {
    for (let i = 0; i < 2; i++) {
      cy.get("a.addItem").eq(i).click();
      cy.wait(300);
    }

    cy.get('a[href="/basket"]').click();
    cy.wait(500);

    cy.contains("a", "Empty Basket").click();

    cy.on("window:confirm", () => true);

    cy.wait(500);

    cy.get("#basketCount").should("contain", "0");

    cy.get("#basketItems li").then(($items) => {
      if ($items.length === 1) {
        cy.get("#basketItems").within(() => {
          cy.contains("li", "Total").within(() => {
            cy.get("strong").should("contain", "£0.00");
          });
        });
      } else {
        cy.get("#basketItems li").not(":contains('Total')").should("not.exist");
      }
    });

    cy.log("✅ Basket successfully emptied");
  });
});
