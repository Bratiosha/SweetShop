describe("Main Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  it("TC_1.1 - Header with all navigation links is visible", () => {
    cy.visit(base);

    cy.get("#navbarColor01").should("exist");
    cy.log("✅ SUCCESS: Header is visible");

    const links = [
      { href: "/sweets", text: "Sweets" },
      { href: "/about", text: "About" },
      { href: "/login", text: "Login" },
      { href: "/basket", text: "Basket" },
    ];

    links.forEach((link) => {
      cy.get(`#navbarColor01 a[href="${link.href}"]`)
        .should("exist")
        .then(($el) => {
          cy.wrap($el).should("be.visible");
          cy.log(`✅ SUCCESS: Navigation link "${link.text}" is visible`);
        });
    });
  });
});
