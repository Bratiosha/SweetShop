describe("TS_7 - Basket Functionality Verification", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  it("TC_7.2 - Should correctly apply £0.00 for Collect (Free) delivery", () => {
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

    cy.get("a.addItem").first().click();
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

    cy.get('input[type="radio"][value="0.00"]').check({ force: true });
    cy.wait(500);

    cy.get('input[type="radio"][value="0.00"]').should("be.checked");
    cy.get('label[for="exampleRadios1"]').should("contain", "Collect (FREE)");

    cy.get("@subtotal").then((subtotal) => {
      cy.get("#basketItems").within(() => {
        cy.contains("li", "Total").within(() => {
          cy.get("strong").should("contain", `£${subtotal.toFixed(2)}`);
        });
      });
      cy.log(
        `✅ Free delivery correctly applied. Total remains £${subtotal.toFixed(
          2
        )}`
      );
    });
  });
});
