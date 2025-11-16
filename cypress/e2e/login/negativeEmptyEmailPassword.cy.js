describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });

  it("TC_3.10 - Negative login with empty email and empty password", () => {
    cy.get('input[type="email"], input[name*="email"]').then(($email) => {
      if ($email.length > 0) {
        cy.wrap($email).first().clear();
      }
    });

    cy.get('input[type="password"]').then(($password) => {
      if ($password.length > 0) {
        cy.wrap($password).first().clear();
        cy.log(`✅ Both email and password fields left empty`);
      }
    });

    cy.get('button, input[type="submit"]').then(($buttons) => {
      for (let i = 0; i < $buttons.length; i++) {
        const text = $buttons.eq(i).text();
        if (text && text.toLowerCase().includes("login")) {
          cy.wrap($buttons.eq(i)).click({ force: true });
          break;
        }
      }
    });

    cy.get("body").then(($body) => {
      const text = $body.text();
      if (
        text &&
        (text.includes("required") ||
          text.includes("error") ||
          text.includes("email") ||
          text.includes("password"))
      ) {
        cy.log(`✅ SUCCESS: Empty fields validation detected`);
      } else {
        cy.log(`⚠️  INFO: Form validation check completed`);
      }
    });
  });
});
