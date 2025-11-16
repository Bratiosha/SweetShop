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

it("TC_9.2.2 - Add shipping costs", () => {

      cy.contains("Total (GBP)")
        .parent()
        .invoke("text")
        .then((totalText) => {
          const initialTotal = parseFloat(
            totalText.match(/£(\d+\.\d{2})/)?.[1] || "0"
          );
          cy.log(`Initial total: £${initialTotal.toFixed(2)}`);

          cy.get('input[type="radio"][value="1.99"]').check({ force: true });
          cy.wait(500);

          cy.get('input[type="radio"][value="1.99"]').should("be.checked");
          cy.get('label[for="exampleRadios2"]').should(
            "contain",
            "Standard Shipping (£1.99)"
          );

          cy.wait(500);

          cy.contains("Total (GBP)")
            .parent()
            .invoke("text")
            .then((newTotalText) => {
              const newTotal = parseFloat(
                newTotalText.match(/£(\d+\.\d{2})/)?.[1] || "0"
              );
              const expectedTotal = initialTotal + 1.99;
              expect(newTotal).to.equal(expectedTotal);
              cy.log(
                `✅ Shipping costs added. New total: £${newTotal.toFixed(2)}`
              );
            });
        });
    });

  });
});