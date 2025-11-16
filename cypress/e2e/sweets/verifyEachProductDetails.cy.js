describe("TS_5 Sweets Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/sweets", { failOnStatusCode: false });
  });

it("TC_5.2 - Verify each product has name, price, image, and Add to Basket button", () => {
  cy.get(".card").should("have.length.greaterThan", 0).each(($card, index) => {
    const productNum = index + 1;

    cy.wrap($card)
      .find("h4.card-title")
      .should("exist")
      .invoke("text")
      .then((nameText) => {
        expect(nameText.trim()).to.not.be.empty;
        cy.log(`Product ${productNum} - Name: "${nameText.trim()}"`);
      });

    cy.wrap($card)
      .find("small.text-muted")
      .should("exist")
      .should("be.visible")
      .invoke("text")
      .then((priceText) => {
        const cleanPrice = priceText.trim();
        expect(cleanPrice).to.match(/^£\s?\d+\.\d{2}$/);
        cy.log(`Product ${productNum} - Price: "${cleanPrice}"`);
      });

    cy.wrap($card)
      .find("img.card-img-top")
      .should("exist")
      .and(($img) => {
        const imgSrc = $img.attr("src");
        expect(imgSrc).to.not.be.empty;
        
        const naturalWidth = $img[0].naturalWidth;
        expect(naturalWidth).to.be.greaterThan(0, `Image failed to load: ${imgSrc}`);
      })
      .invoke("attr", "src")
      .then((imgSrc) => {
        cy.log(`Product ${productNum} - Image loaded: "${imgSrc}"`);
      });

    cy.wrap($card)
      .find("a.addItem")
      .should("exist")
      .should("be.visible")
      .invoke("text")
      .then((btnText) => {
        const cleanBtnText = btnText.trim();
        expect(cleanBtnText.toLowerCase()).to.include("add");
        cy.log(`Product ${productNum} - Button: "${cleanBtnText}"`);
      });

    cy.log(`✅ Product ${productNum} - All checks passed\n`);
  });
});

});
