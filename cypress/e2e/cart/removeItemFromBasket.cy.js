describe("TS_7 - Basket Functionality Verification", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });

  it("TC_7.4 - Remove item from basket and verify the basket count and total price is updated", () => {
    const addedProducts = [];

    for (let i = 0; i < 3; i++) {
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
                });
            });
        });

      cy.get("a.addItem").eq(i).click();
      cy.wait(300);
    }

    cy.get('a[href="/basket"]').click();
    cy.wait(500);

    cy.wrap(addedProducts).then((products) => {
      cy.get("#basketCount").should("contain", "3");

      const initialTotal = products.reduce((sum, p) => sum + p.price, 0);
      cy.log(`Initial total: £${initialTotal.toFixed(2)}`);
      cy.log(
        `Products: ${products.map((p) => `${p.name} (£${p.price})`).join(", ")}`
      );

      cy.get("#basketItems li")
        .first()
        .within(() => {
          cy.contains("a", "Delete Item").click();
        });

      cy.wait(500);

      cy.get("#basketCount").should("contain", "2");

      cy.get("#basketItems li").then(($items) => {
        const remainingPrices = [];

        $items.each((index, item) => {
          const text = Cypress.$(item).text();
          if (!text.includes("Total")) {
            const priceMatch = text.match(/£(\d+\.\d{2})/);
            if (priceMatch) {
              remainingPrices.push(parseFloat(priceMatch[1]));
            }
          }
        });

        const expectedTotal = remainingPrices.reduce(
          (sum, price) => sum + price,
          0
        );
        cy.log(
          `Remaining prices: ${remainingPrices
            .map((p) => `£${p.toFixed(2)}`)
            .join(", ")}`
        );
        cy.log(`Expected total: £${expectedTotal.toFixed(2)}`);

        cy.get("#basketItems").within(() => {
          cy.contains("li", "Total").within(() => {
            cy.get("strong").should("contain", `£${expectedTotal.toFixed(2)}`);
          });
        });

        cy.log(
          `✅ Product removed. New total verified: £${expectedTotal.toFixed(2)}`
        );
      });
    });
  });
});
