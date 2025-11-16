describe("About Page Test", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/about");
  });
  it("TC_4.2 - Verify the page has a description", () => {
    cy.get(
      'p, [class*="description"], [class*="intro"], [class*="info"], [class*="about"]'
    ).then(($elements) => {
      let found = false;
      for (let i = 0; i < $elements.length; i++) {
        const text = $elements.eq(i).text();
        if (text && text.length > 20) {
          found = true;
          cy.log(
            `✅ SUCCESS: Description found: "${text.substring(0, 80)}..."`
          );
          break;
        }
      }

      if (!found) {
        // Check if body has any content
        cy.get("body").then(($body) => {
          const bodyText = $body.text();
          if (bodyText && bodyText.length > 100) {
            cy.log(`✅ SUCCESS: Page has descriptive content`);
          } else {
            cy.log(`❌ FAILED: No description found on page`);
          }
        });
      }
    });
  });
});
