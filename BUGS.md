# 🐛 Known Bugs & Issues

This document tracks all identified bugs in the Sweet Shop application.

**Last Updated:** November 2024  
**Total Bugs:** 6  
**Severity Breakdown:** 🔴 Critical: 2 | 🟠 High: 2 | 🟡 Medium: 2

---

## 🔴 **Critical Bugs**

### **BUG-001: Incorrect Email Display After Login**

**Severity:** 🔴 Critical  
**Status:** 🔓 Open  
**Priority:** P1  
**Discovered:** November 2024

**Description:**  
When a user logs in with valid credentials, the system displays a different email address than what was used to log in.

**Steps to Reproduce:**
1. Navigate to login page
2. Enter valid credentials:
   - Email: `user@example.com`
   - Password: `ValidPassword123`
3. Click "Login" button
4. Observe the displayed email in account section

**Expected Result:**  
The system should display `user@example.com`

**Actual Result:**  
The system displays a different email address (e.g., `different@example.com`)

**Impact:**  
- User confusion
- Potential security concern
- Loss of user trust
- Account management issues

**Test File:**  
`cypress/e2e/account/verifyMatchingAccountName.cy.js`

**Screenshots:**  
![Bug-001 Screenshot](path/to/screenshot.png)

---

### **BUG-002: Standard Shipping Price Changes to 11.99**

**Severity:** 🔴 Critical  
**Status:** 🔓 Open  
**Priority:** P1  
**Discovered:** November 2024

**Description:**  
When selecting "Standard Shipping" option at checkout, the shipping cost displays as £11.99 instead of the advertised £1.99.

**Steps to Reproduce:**
1. Add any product to basket
2. Navigate to checkout page
3. Select "Standard Shipping (£1.99)" option
4. Observe the shipping cost in order summary

**Expected Result:**  
Shipping cost: **£1.99**  
Total: Product price + £1.99

**Actual Result:**  
Shipping cost: **£11.99**  
Total: Product price + £11.99

**Impact:**  
- Customers charged 10x the advertised price
- Legal/compliance issues
- Revenue loss due to cart abandonment
- Customer complaints

**Test File:**  
`cypress/e2e/cart/applyStandardDelivery10x.cy.js`

**Evidence:**
```javascript
// Expected
Shipping: £1.99
Total: £5.99 (£4.00 + £1.99)

// Actual
Shipping: £11.99
Total: £15.99 (£4.00 + £11.99)
```

---

## 🟠 **High Severity Bugs**

### **BUG-003: Standard Shipping Price Shows NaN**

**Severity:** 🟠 High  
**Status:** 🔓 Open  
**Priority:** P1  
**Discovered:** November 2024

**Description:**  
Under certain conditions, selecting "Standard Shipping" causes the shipping cost to display as "NaN" (Not a Number), breaking the checkout calculation.

**Steps to Reproduce:**
1. Add product to basket
2. Navigate to checkout
3. Select "Standard Shipping" option
4. [Specific trigger condition needed - requires investigation]
5. Observe shipping cost displays as "NaN"

**Expected Result:**  
Shipping cost: **£1.99**

**Actual Result:**  
Shipping cost: **NaN**  
Total becomes: **NaN**

**Impact:**  
- Checkout process breaks
- Cannot complete purchase
- JavaScript calculation error
- Poor user experience

**Test File:**  
`cypress/e2e/cart/applyStandardDeliveryNaN.cy.js`

**Technical Details:**
```javascript
// Possible causes:
// 1. parseFloat() receives undefined/null
// 2. Currency symbol not stripped properly
// 3. Race condition in state update
```

**Related Issues:**  
May be related to BUG-002

---

### **BUG-004: Broken Navigation Link from Basket to About**

**Severity:** 🟠 High  
**Status:** 🔓 Open  
**Priority:** P2  
**Discovered:** November 2024

**Description:**  
The navigation link from Basket page to About page is broken due to incorrect href attribute.

**Steps to Reproduce:**
1. Navigate to Basket page (`/basket`)
2. Click on "About" link in navigation menu
3. Observe the URL and page content

**Expected Result:**  
- URL should be: `/about`
- About page should load correctly

**Actual Result:**  
- URL becomes: `/bout`
- 404 Page Not Found error

**Impact:**  
- Broken navigation flow
- Poor user experience
- SEO impact (404 errors)

**Test File:**  
`cypress/e2e/navigation/navigationFromBasketPage.cy.js`

**Root Cause:**
```html
<!-- Incorrect -->
<a href="/bout">About</a>

<!-- Correct -->
<a href="/about">About</a>
```

**Location:**  
Navigation bar on `/basket` page

---

## 🟡 **Medium Severity Bugs**

### **BUG-005: Product Name Typo in Checkout - "Sherbet Discs"**

**Severity:** 🟡 Medium  
**Status:** 🔓 Open  
**Priority:** P3  
**Discovered:** November 2024

**Description:**  
Product name inconsistency between product page and checkout basket. The product is called "Sherbert Discs" on the product page but displays as "Sherbet Discs" (missing 'r') in the checkout basket.

**Steps to Reproduce:**
1. Navigate to Sweets page
2. Verify product name shows "Sherbert Discs"
3. Add "Sherbert Discs" to basket
4. Navigate to checkout
5. Observe product name in basket

**Expected Result:**  
Product name in checkout: **"Sherbert Discs"**

**Actual Result:**  
Product name in checkout: **"Sherbet Discs"**

**Impact:**  
- Brand inconsistency
- Customer confusion
- Potential order verification issues
- Looks unprofessional

**Test File:**  
`cypress/e2e/cart/verifyProductDetails.cy.js`

**Evidence:**
```javascript
// Product page (cypress/e2e/sweets/)
<h4 class="card-title">Sherbert Discs</h4>
<button data-name="Sherbet Discs">Add to Basket</button> // Wrong!

// Checkout page
Item: "Sherbet Discs" // Should be "Sherbert Discs"
```

**Location:**
- Product catalog: `/sweets` (Correct: "Sherbert")
- Checkout basket: `/basket` (Incorrect: "Sherbet")

---

### **BUG-006: Missing Product Image for Wham Bars**

**Severity:** 🟡 Medium  
**Status:** 🔓 Open  
**Priority:** P3  
**Discovered:** November 2024

**Description:**  
The product image for "Wham Bars" on the Sweets page fails to load due to incorrect image filename in the URL.

**Steps to Reproduce:**
1. Navigate to Sweets page (`/sweets`)
2. Scroll to "Wham Bars" product card
3. Observe the product image (broken/missing)
4. Check browser console for 404 error

**Expected Result:**  
- Image should load successfully
- Should display: `img/wham.jpg`

**Actual Result:**  
- Image fails to load (404 error)
- URL tries to load: `img/whan.jpg` (typo)

**Impact:**  
- Poor visual presentation
- Reduced conversion rate
- Unprofessional appearance
- Customer trust issues

**Test File:**  
`cypress/e2e/sweets/verifyEachProductDetails.cy.js`

**Root Cause:**
```html
<!-- Incorrect -->
<img class="card-img-top" src="img/whan.jpg" alt="wham bar">

<!-- Correct -->
<img class="card-img-top" src="img/wham.jpg" alt="wham bar">
```

**Browser Console Error:**
```
GET https://sweetshop.netlify.app/img/whan.jpg 404 (Not Found)
```

**Location:**  
Sweets page - Wham Bars product card

---

## 📊 **Bug Summary Table**

| Bug ID | Title | Severity | Priority | Status | Affected Feature |
|--------|-------|----------|----------|--------|-----------------|
| BUG-001 | Incorrect email after login | 🔴 Critical | P1 | 🔓 Open | Login/Account |
| BUG-002 | Shipping price shows 11.99 | 🔴 Critical | P1 | 🔓 Open | Checkout |
| BUG-003 | Shipping price shows NaN | 🟠 High | P1 | 🔓 Open | Checkout |
| BUG-004 | Broken navigation to About | 🟠 High | P2 | 🔓 Open | Navigation |
| BUG-005 | Product name typo | 🟡 Medium | P3 | 🔓 Open | Checkout |
| BUG-006 | Missing Wham Bars image | 🟡 Medium | P3 | 🔓 Open | Product Display |

---

## 🎯 **Recommended Fix Priority**

### **Sprint 1 (Immediate)** 🚨
1. **BUG-002** - Fix shipping price calculation (£11.99 → £1.99)
2. **BUG-003** - Fix NaN shipping price error
3. **BUG-001** - Fix incorrect email display

### **Sprint 2 (High Priority)** ⚠️
4. **BUG-004** - Fix navigation href typo (`/bout` → `/about`)

### **Sprint 3 (Nice to Have)** 📝
5. **BUG-005** - Fix product name consistency ("Sherbet" → "Sherbert")
6. **BUG-006** - Fix image filename (`whan.jpg` → `wham.jpg`)

---

## 🔍 **Testing Coverage**

All bugs have been documented with corresponding Cypress test files:
```bash
# Run tests that detect these bugs
npm run test:login          # Detects BUG-001
npm run test:checkout       # Detects BUG-002, BUG-003, BUG-005
npm run test:navigation     # Detects BUG-004
npm run test:sweets         # Detects BUG-006
```

---

## 📝 **Bug Report Template**

When reporting new bugs, use this template:
```markdown
### **BUG-XXX: [Short Title]**

**Severity:** 🔴/🟠/🟡  
**Status:** 🔓 Open / 🔒 Fixed  
**Priority:** P1/P2/P3  
**Discovered:** [Date]

**Description:**  
[Clear description of the bug]

**Steps to Reproduce:**
1. Step one
2. Step two
3. Step three

**Expected Result:**  
[What should happen]

**Actual Result:**  
[What actually happens]

**Impact:**  
- Impact point 1
- Impact point 2

**Test File:**  
`cypress/e2e/[path]/[file].cy.js`

**Screenshots/Evidence:**  
[Add screenshots or code snippets]
```

---

## 🤝 **Contributing**

Found a new bug? Please:
1. Document it using the template above
2. Create a Cypress test that reproduces it
3. Submit a pull request with both

---

## 📞 **Contact**

**For bug reports or questions:**
- GitHub Issues: [Create Issue](https://github.com/Bratiosha/SweetShop/issues)
- Repository: [SweetShop](https://github.com/Bratiosha/SweetShop)

---

<div align="center">

**Document Version:** 1.0  
**Last Review:** November 2024  
**Maintained by:** [Bratiosha](https://github.com/Bratiosha)

</div>