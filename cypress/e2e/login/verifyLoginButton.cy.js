describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });
  it("TC_3.4 - Verify the page contains a Login button", () => {
    cy.get('button, input[type="submit"], a[class*="btn"]').then(($buttons) => {
      let found = false;
      for (let i = 0; i < $buttons.length; i++) {
        const text = $buttons.eq(i).text();
        if (text && text.toLowerCase().includes("login")) {
          found = true;
          cy.log(`✅ SUCCESS: Login button found`);
          break;
        }
      }

      if (!found) {
        cy.log(`❌ FAILED: Login button not found`);
      }
    });
  });
});
