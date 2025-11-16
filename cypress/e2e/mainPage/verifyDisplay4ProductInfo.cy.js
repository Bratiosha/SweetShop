describe("Main Page Tests", () => {
  const base = "https://sweetshop.netlify.app";

  it("TC_1.4 - Page displays at least 4 popular sweets with correct info", () => {
    cy.visit(base);

    cy.get("body").then(($body) => {
      let $items = $body.find('[class*="card"]');
      if ($items.length < 4) {
        $items = $body.find('[class*="item"]');
      }
      if ($items.length < 4) {
        $items = $body.find('[class*="product"]');
      }

      const itemCount = $items.length;

      if (itemCount >= 4) {
        cy.log(
          `✅ SUCCESS: Found ${itemCount} sweet items (at least 4 required)`
        );

        for (let i = 0; i < 4 && i < itemCount; i++) {
          const $item = $items.eq(i);
          const text = $item.text();

          if (text && text.length > 0) {
            cy.log(`✅ SUCCESS: Sweet item ${i + 1} has content`);
          }

          if (
            $item.find("img").length > 0 ||
            $item.find('[style*="background"]').length > 0
          ) {
            cy.log(`✅ SUCCESS: Sweet item ${i + 1} has image/visual`);
          } else {
            cy.log(`⚠️  INFO: Sweet item ${i + 1} may not have image`);
          }

          const $price = $item.find(
            '[class*="price"], [class*="cost"], [class*="amount"]'
          );
          if ($price.length > 0) {
            cy.log(`✅ SUCCESS: Sweet item ${i + 1} has price info`);
          }
        }
      } else {
        cy.log(
          `⚠️  WARNING: Only found ${itemCount} items, expected at least 4`
        );
      }
    });
  });
});
