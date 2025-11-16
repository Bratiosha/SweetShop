describe("TS_6 - Add to Basket Functionality", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base, { failOnStatusCode: false });
  });
  it("TC_6.2 - Should add 3 random products from Sweets page to basket and verify", () => {
    cy.visit(base + "/sweets", { failOnStatusCode: false });

    cy.get("a.addItem")
      .should("have.length.greaterThan", 0)
      .then(($buttons) => {
        const buttonCount = $buttons.length;
        const addedProducts = [];

        const randomIndices = [];
        while (randomIndices.length < 3 && randomIndices.length < buttonCount) {
          const randomIndex = Math.floor(Math.random() * buttonCount);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }

        cy.log(
          `🎲 Randomly selected products: ${randomIndices
            .map((i) => i + 1)
            .join(", ")}`
        );

        randomIndices.forEach((index, i) => {
          cy.get(".card")
            .eq(index)
            .within(() => {
              cy.get("h4.card-title")
                .invoke("text")
                .then((name) => {
                  cy.get("small.text-muted")
                    .invoke("text")
                    .then((price) => {
                      cy.get("a.addItem")
                        .invoke("attr", "data-id")
                        .then((id) => {
                          addedProducts.push({
                            name: name.trim(),
                            price: price.trim(),
                            id: id,
                          });
                          cy.log(
                            `Product ${
                              i + 1
                            }: "${name.trim()}" at ${price.trim()} (ID: ${id})`
                          );
                        });
                    });
                });
            });

          cy.get("a.addItem").eq(index).click();
          cy.wait(300); // Small wait between clicks
        });

        cy.wrap(addedProducts).then((products) => {
          cy.log(
            `✅ Added ${products.length} random products from Sweets page to basket`
          );
          products.forEach((product, i) => {
            cy.log(`  ${i + 1}. ${product.name} - ${product.price}`);
          });
        });
      });
  });
});
