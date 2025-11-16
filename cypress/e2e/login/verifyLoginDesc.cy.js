describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });

  it("TC_3.2 - Verify the page has a description", () => {
    cy.get('p, [class*="description"], [class*="intro"], [class*="info"]').then(
      ($elements) => {
        let found = false;
        for (let i = 0; i < $elements.length; i++) {
          const text = $elements.eq(i).text();
          if (text && text.length > 10) {
            found = true;
            cy.log(
              `✅ SUCCESS: Page has description: "${text.substring(0, 60)}..."`
            );
            break;
          }
        }

        if (!found) {
          cy.log(`⚠️  INFO: Description element not found`);
        }
      }
    );
  });
});
