describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });

  it("TC_3.3 - Verify the page contains email and password input fields", () => {
    cy.get(
      'input[type="email"], input[name*="email"], input[placeholder*="email"]',
      { timeout: 5000 }
    ).then(($email) => {
      if ($email.length > 0) {
        cy.log(`✅ SUCCESS: Email input field found`);
      } else {
        cy.log(`❌ FAILED: Email input field not found`);
      }
    });

    cy.get('input[type="password"], input[name*="password"]', {
      timeout: 5000,
    }).then(($password) => {
      if ($password.length > 0) {
        cy.log(`✅ SUCCESS: Password input field found`);
      } else {
        cy.log(`❌ FAILED: Password input field not found`);
      }
    });
  });
});
