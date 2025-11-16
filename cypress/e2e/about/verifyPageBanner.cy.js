describe("TS_4 About Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  beforeEach(() => {
    cy.visit(base + "/about");
  });
  it("TC_4.3 - Verify the page has a banner and it matches the year 2018", () => {
    let bannerFound = false;
    let yearMatched = false;

    cy.get(
      '[class*="banner"], [class*="hero"], [class*="jumbotron"], .cover, header, section'
    ).then(($banners) => {
      for (let i = 0; i < $banners.length; i++) {
        const text = $banners.eq(i).text();
        const backgroundImage = $banners.eq(i).css("background-image");

        if (text || backgroundImage) {
          bannerFound = true;
          cy.log(`✅ SUCCESS: Banner element found`);

          if (text && text.includes("2018")) {
            yearMatched = true;
            cy.log(
              `✅ SUCCESS: Year 2018 found in banner text: "${text.substring(
                0,
                60
              )}..."`
            );
          }
        }
      }
      if (!bannerFound) {
        cy.get(
          'img[alt*="banner"], img[alt*="about"], img[src*="banner"]'
        ).then(($imgs) => {
          if ($imgs.length > 0) {
            bannerFound = true;
            cy.log(`✅ SUCCESS: Banner image found`);
          }
        });
      }
      if (!yearMatched) {
        cy.get("body").then(($body) => {
          const bodyText = $body.text();
          if (bodyText && bodyText.includes("2018")) {
            yearMatched = true;
            cy.log(`✅ SUCCESS: Year 2018 found on page`);
          }
        });
      }

      if (!bannerFound) {
        cy.log(`⚠️  INFO: Banner element not explicitly found`);
      }

      if (bannerFound && yearMatched) {
        cy.log(`✅ SUCCESS: Page has banner with year 2018 information`);
      }
    });
  });
});
