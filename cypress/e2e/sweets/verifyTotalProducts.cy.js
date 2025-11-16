describe("TS_5 Sweets Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/sweets", { failOnStatusCode: false });
  });

it("TC_5.2.0 - Count total products", () => {
  cy.visit(base + "/sweets");
  cy.get(".card").should("have.length.greaterThan", 0).then(($cards) => {
    const productCount = $cards.length;
    expect(productCount).to.be.greaterThan(0);
    cy.log(`✅ Found ${productCount} product(s)`);
  });
});

beforeEach(() => {
  cy.visit(base + "/sweets", { failOnStatusCode: false });
});

});