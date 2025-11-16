describe("TS_7 - Basket Functionality Verification", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  it("TC_7.3.1 - Should correctly apply £1.99 delivery 'Standard shipping (1.99)'", () => {
    cy.get('a[href="/basket"]').click();
    cy.wait(500);

    cy.contains("a", "Empty Basket").click();

    cy.on("window:confirm", () => true);

    cy.wait(500);

    cy.get("#basketCount").should("contain", "0");

    cy.get('a[href="/"]').click();
    cy.wait(500);

    cy.get(".card")
      .first()
      .within(() => {
        cy.get("small.text-muted")
          .invoke("text")
          .then((price) => {
            const priceValue = parseFloat(price.replace("£", ""));
            cy.wrap(priceValue).as("productPrice");
          });
      });

    cy.get("a.addItem").eq(2).click();
    cy.wait(300);

    cy.get('a[href="/basket"]').click();
    cy.wait(500);

    cy.get("#basketItems").within(() => {
      cy.contains("li", "Total").within(() => {
        cy.get("strong")
          .invoke("text")
          .then((totalText) => {
            const subtotal = parseFloat(totalText.replace("£", ""));
            cy.wrap(subtotal).as("subtotal");
          });
      });
    });

    cy.get('input[type="radio"][value="1.99"]').check({ force: true });
    cy.wait(500);

    cy.get('input[type="radio"][value="1.99"]').should("be.checked");
    cy.get('label[for="exampleRadios2"]').should(
      "contain",
      "Standard Shipping (£1.99)"
    );

    cy.get("@subtotal").then((subtotal) => {
      const expectedGrandTotal = subtotal + 1.99;
      cy.get("#basketItems").within(() => {
        cy.contains("li", "Total").within(() => {
          cy.get("strong").should(
            "contain",
            `£${expectedGrandTotal.toFixed(2)}`
          );
        });
      });
      cy.log(
        `✅ Standard shipping (£1.99) correctly applied. Total: £${expectedGrandTotal.toFixed(
          2
        )}`
      );
    });
  });
});
