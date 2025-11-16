describe("TS_7 - Basket Functionality Verification, Name Error", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  it("TC_7.1 - Should show correct product details, count in basket and total price", () => {
    cy.get('a[href="/basket"]').click();
    cy.wait(500);
    cy.contains("a", "Empty Basket").click();
    cy.on("window:confirm", () => true);
    cy.wait(500);
    cy.get("#basketCount").should("contain", "0");
    cy.get('a[href="/"]').click();
    cy.wait(500);

    const addedProducts = [];

    cy.get("a.addItem")
      .should("have.length.greaterThan", 0)
      .then(($buttons) => {
        const productsToAdd = 2;

        for (let i = 0; i < productsToAdd; i++) {
          cy.get(".card")
            .eq(i)
            .within(() => {
              cy.get("h4.card-title")
                .invoke("text")
                .then((name) => {
                  cy.get("small.text-muted")
                    .invoke("text")
                    .then((price) => {
                      const priceValue = parseFloat(price.replace("£", ""));
                      addedProducts.push({
                        name: name.trim(),
                        price: priceValue,
                      });
                      cy.log(`Adding: ${name.trim()} - £${priceValue}`);
                    });
                });
            });

          cy.get("a.addItem").eq(i).click();
          cy.wait(300);
        }
      });

    cy.get('a[href="/basket"]').click();
    cy.url().should("include", "/basket");
    cy.wait(500);

    cy.wrap(addedProducts).then((products) => {
      cy.get("#basketCount").should("contain", products.length);

      products.forEach((product) => {
        cy.get("#basketItems").should("contain", product.name);
        cy.log(`✅ Verified: ${product.name} is in basket`);
      });

      const expectedTotal = products.reduce((sum, p) => sum + p.price, 0);
      cy.get("#basketItems").within(() => {
        cy.contains("li", "Total").within(() => {
          cy.get("strong").should("contain", `£${expectedTotal.toFixed(2)}`);
        });
      });

      cy.log(`✅ Total price verified: £${expectedTotal.toFixed(2)}`);
    });
  });
});