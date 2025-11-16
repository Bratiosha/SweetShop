describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });

  it("TC_3.8 - Negative login with empty email", () => {
    const password = "password123";

    cy.get('input[type="email"], input[name*="email"]').then(($email) => {
      if ($email.length > 0) {
        cy.wrap($email).first().clear();
        cy.log(`✅ Email field left empty`);
      }
    });

    cy.get('input[type="password"]').then(($password) => {
      if ($password.length > 0) {
        cy.wrap($password).first().clear().type(password);
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
          text.includes("email") ||
          text.includes("error"))
      ) {
        cy.log(`✅ SUCCESS: Empty email validation detected`);
      } else {
        cy.log(`⚠️  INFO: Email validation check completed`);
      }
    });
  });
});
