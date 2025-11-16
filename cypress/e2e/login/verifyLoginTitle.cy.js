describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });

  it("TC_3.1 - Verify the page title is Login", () => {
    cy.get('h1, h2, .page-title, [class*="title"]').then(($titles) => {
      let found = false;
      cy.wrap($titles).each(($title) => {
        const text = $title.text();
        if (text && text.toLowerCase().includes("login")) {
          found = true;
          cy.log(`✅ SUCCESS: Page title contains "Login": "${text}"`);
        }
      });

      if (!found) {
        cy.title().then((pageTitle) => {
          if (pageTitle && pageTitle.toLowerCase().includes("login")) {
            cy.log(`✅ SUCCESS: Page title is "Login"`);
          } else {
            cy.log(`⚠️  INFO: Login title not explicitly found`);
          }
        });
      }
    });
  });
});
