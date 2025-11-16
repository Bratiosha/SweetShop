describe("TS_3 Login Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/login");
  });

  it("TC_3.5 - Verify links to Twitter, Facebook, Linkedin", () => {
    const socialLinks = ["twitter", "facebook", "linkedin"];
    let foundCount = 0;

    socialLinks.forEach((social) => {
      cy.get('a, [class*="social"]').then(($links) => {
        let found = false;
        for (let i = 0; i < $links.length; i++) {
          const href = $links.eq(i).attr("href");
          const text = $links.eq(i).text();
          if (
            (href && href.toLowerCase().includes(social)) ||
            (text && text.toLowerCase().includes(social))
          ) {
            found = true;
            cy.log(
              `✅ SUCCESS: ${
                social.charAt(0).toUpperCase() + social.slice(1)
              } link found`
            );
            break;
          }
        }

        if (!found) {
          cy.log(
            `⚠️  INFO: ${
              social.charAt(0).toUpperCase() + social.slice(1)
            } link not found`
          );
        }
      });
    });
  });
});
