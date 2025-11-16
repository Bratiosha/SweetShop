describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  it("TC_3.6 - Positive login with valid data and verify displayed email", () => {
    const validEmail = "test@user.com";
    const validPassword = "password123";

    cy.visit(base + "/login");

    cy.get('input[type="email"], input[name*="email"]').then(($email) => {
      if ($email.length > 0) {
        cy.wrap($email).first().clear().type(validEmail);
        cy.log(`✅ Email entered: ${validEmail}`);
      }
    });

    cy.get('input[type="password"]').then(($password) => {
      if ($password.length > 0) {
        cy.wrap($password).first().clear().type(validPassword);
        cy.log(`✅ Password entered`);
      }
    });

    cy.get('button, input[type="submit"]').then(($buttons) => {
      for (let i = 0; i < $buttons.length; i++) {
        const text = $buttons.eq(i).text();
        if (text && text.toLowerCase().includes("login")) {
          cy.wrap($buttons.eq(i)).click({ force: true });
          cy.log(`✅ Login button clicked`);
          break;
        }
      }
    });

    cy.location("pathname", { timeout: 5000 }).then((loc) => {
      if (loc !== "/login") {
        cy.log(`✅ SUCCESS: Login successful, redirected to ${loc}`);
      } else {
        cy.get("body").then(($body) => {
          const text = $body.text();
          if (
            text &&
            (text.includes("success") ||
              text.includes("Welcome") ||
              text.includes("logged"))
          ) {
            cy.log(`✅ SUCCESS: Login successful message displayed`);
          } else {
            cy.log(
              `⚠️ INFO: Login attempt completed, check page for confirmation`
            );
          }
        });
      }
    });

    cy.get("header p.lead a")
      .invoke("text")
      .then((displayedEmail) => {
        if (displayedEmail.trim() === validEmail) {
          cy.log(`✅ Logged-in email matches: ${displayedEmail}`);
        } else {
          cy.log(
            `⚠️ Logged-in email mismatch! Expected: ${validEmail}, Found: ${displayedEmail}`
          );
        }

        expect(displayedEmail.trim()).to.eq(validEmail);
      });
  });
});
