# 🍬 Sweet Shop - Cypress E2E Testing Suite

[![Cypress](https://img.shields.io/badge/cypress-15.6.0-green.svg)](https://www.cypress.io/)
[![Node](https://img.shields.io/badge/node-22.18.0-blue.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-ISC-lightgrey.svg)](LICENSE)

Comprehensive automated end-to-end testing suite for the Sweet Shop e-commerce website. This project ensures quality and reliability across all user journeys including navigation, product browsing, cart management, and checkout processes.

**🌐 Website Under Test:** https://sweetshop.netlify.app

## 📊 Project Statistics

- **Total Test Files:** 42
- **Test Categories:** 9
- **Total Test Coverage Areas:** 11 major features
- **Framework:** Cypress 15.6.0
- **Node.js:** 22.18.0
- **Test Organization:** Modular structure with separated concerns

## 🗂️ Project Structure
```
SweetShop/
├── cypress/
│   ├── e2e/
│   │   ├── about/                    # About page tests (3 files)
│   │   │   ├── verifyPageBanner.cy.js
│   │   │   ├── verifyPageDesc.cy.js
│   │   │   └── verifyPageTitle.cy.js
│   │   ├── account/                  # Account verification (2 files)
│   │   │   ├── verifyMatchingAccountName.cy.js
│   │   │   └── verifyNonMatchingAccountName.cy.js
│   │   ├── basket/                   # Basket functionality (2 files)
│   │   │   ├── verifyBasketMainMenu.cy.js
│   │   │   └── verifyBasketSweetMenu.cy.js
│   │   ├── cart/                     # Cart management (7 files)
│   │   │   ├── applyFreeDelivery.cy.js
│   │   │   ├── applyStandardDelivery10x.cy.js
│   │   │   ├── applyStandardDeliveryNaN.cy.js
│   │   │   ├── removeItemFromBasket.cy.js
│   │   │   ├── verifyCancelledBasket.cy.js
│   │   │   ├── verifyEmptybasket.cy.js
│   │   │   └── verifyProductDetails.cy.js
│   │   ├── checkout/                 # Checkout process (5 files)
│   │   │   ├── addShippingCost.cy.js
│   │   │   ├── successfulCheckout.cy.js
│   │   │   ├── validPaymentAndShipping.cy.js
│   │   │   ├── verifyAllItemDisplay.cy.js
│   │   │   └── verifyCheckoutAccessibility.cy.js
│   │   ├── login/                    # Login functionality (10 files)
│   │   │   ├── negativeBadEmailFormat.cy.js
│   │   │   ├── negativeEmptyEmail.cy.js
│   │   │   ├── negativeEmptyEmailPassword.cy.js
│   │   │   ├── negativeEmptyPassword.cy.js
│   │   │   ├── positiveValidData.cy.js
│   │   │   ├── verifyEmailAndPasswordFields.cy.js
│   │   │   ├── verifyLinks.cy.js
│   │   │   ├── verifyLoginButton.cy.js
│   │   │   ├── verifyLoginDesc.cy.js
│   │   │   └── verifyLoginTitle.cy.js
│   │   ├── mainPage/                 # Main page tests (4 files)
│   │   │   ├── verifyBrowseSweetsButton.cy.js
│   │   │   ├── verifyDisplay4ProductInfo.cy.js
│   │   │   ├── verifyHeaderLinksVisible.cy.js
│   │   │   └── verifyWelcomeTextVisible.cy.js
│   │   ├── navigation/               # Navigation tests (5 files)
│   │   │   ├── navigationFromAboutPage.cy.js
│   │   │   ├── navigationFromBasketPage.cy.js
│   │   │   ├── navigationFromLoginPage.cy.js
│   │   │   ├── navigationFromMainPage.cy.js
│   │   │   └── navigationFromSweetsPage.cy.js
│   │   └── sweets/                   # Sweets page tests (3 files)
│   │       ├── verifyEachProductDetails.cy.js
│   │       ├── verifyTitle.cy.js
│   │       └── verifyTotalProducts.cy.js
│   ├── fixtures/                     # Test data files
│   ├── support/
│   │   ├── commands.js               # Custom Cypress commands
│   │   └── e2e.js                    # Support file configuration
│   ├── screenshots/                  # Auto-generated on test failures
│   └── videos/                       # Test execution recordings
├── node_modules/
├── .gitignore
├── cypress.config.js                 # Cypress configuration
├── package.json
├── package-lock.json
└── README.md
```

## 📋 Test Suites Overview

### 1️⃣ About Page Tests (3 tests)
Validates the About page content and structure.

| Test File | Description |
|-----------|-------------|
| `verifyPageBanner.cy.js` | Verifies about page banner displays correctly |
| `verifyPageDesc.cy.js` | Validates page description content |
| `verifyPageTitle.cy.js` | Confirms page title is correct |

### 2️⃣ Account Tests (2 tests)
Tests account name verification functionality.

| Test File | Description |
|-----------|-------------|
| `verifyMatchingAccountName.cy.js` | Tests matching account name scenarios |
| `verifyNonMatchingAccountName.cy.js` | Tests non-matching account name scenarios |

### 3️⃣ Basket Tests (2 tests)
Verifies basket accessibility from different menus.

| Test File | Description |
|-----------|-------------|
| `verifyBasketMainMenu.cy.js` | Validates basket access from main menu |
| `verifyBasketSweetMenu.cy.js` | Validates basket access from sweets menu |

### 4️⃣ Cart Management Tests (7 tests)
Comprehensive cart functionality testing.

| Test File | Description |
|-----------|-------------|
| `applyFreeDelivery.cy.js` | Tests free delivery option selection |
| `applyStandardDelivery10x.cy.js` | Tests standard delivery with multiple items |
| `applyStandardDeliveryNaN.cy.js` | Tests invalid delivery input handling |
| `removeItemFromBasket.cy.js` | Validates item removal functionality |
| `verifyCancelledBasket.cy.js` | Tests basket cancellation |
| `verifyEmptybasket.cy.js` | Validates empty basket state |
| `verifyProductDetails.cy.js` | Confirms product details in cart |

### 5️⃣ Checkout Process Tests (5 tests)
End-to-end checkout flow validation.

| Test File | Description |
|-----------|-------------|
| `addShippingCost.cy.js` | Tests shipping cost calculation |
| `successfulCheckout.cy.js` | Validates complete checkout process |
| `validPaymentAndShipping.cy.js` | Tests payment and shipping form validation |
| `verifyAllItemDisplay.cy.js` | Confirms all items display at checkout |
| `verifyCheckoutAccessibility.cy.js` | Validates checkout page accessibility |

### 6️⃣ Login Functionality Tests (10 tests)
Comprehensive login feature testing including positive and negative scenarios.

| Test File | Description |
|-----------|-------------|
| `negativeBadEmailFormat.cy.js` | Tests invalid email format handling |
| `negativeEmptyEmail.cy.js` | Tests empty email field validation |
| `negativeEmptyEmailPassword.cy.js` | Tests empty credentials validation |
| `negativeEmptyPassword.cy.js` | Tests empty password field validation |
| `positiveValidData.cy.js` | Tests successful login with valid data |
| `verifyEmailAndPasswordFields.cy.js` | Validates form field presence |
| `verifyLinks.cy.js` | Tests login page navigation links |
| `verifyLoginButton.cy.js` | Validates login button functionality |
| `verifyLoginDesc.cy.js` | Tests login page description |
| `verifyLoginTitle.cy.js` | Validates login page title |

### 7️⃣ Main Page Tests (4 tests)
Homepage functionality and UI element verification.

| Test File | Description |
|-----------|-------------|
| `verifyBrowseSweetsButton.cy.js` | Tests browse sweets button functionality |
| `verifyDisplay4ProductInfo.cy.js` | Validates 4 featured products display |
| `verifyHeaderLinksVisible.cy.js` | Tests header navigation links visibility |
| `verifyWelcomeTextVisible.cy.js` | Validates welcome message display |

### 8️⃣ Navigation Tests (5 tests)
Inter-page navigation validation from all major pages.

| Test File | Description |
|-----------|-------------|
| `navigationFromAboutPage.cy.js` | Tests navigation from About page |
| `navigationFromBasketPage.cy.js` | Tests navigation from Basket page |
| `navigationFromLoginPage.cy.js` | Tests navigation from Login page |
| `navigationFromMainPage.cy.js` | Tests navigation from Main page |
| `navigationFromSweetsPage.cy.js` | Tests navigation from Sweets page |

### 9️⃣ Sweets Page Tests (3 tests)
Product listing page validation.

| Test File | Description |
|-----------|-------------|
| `verifyEachProductDetails.cy.js` | Validates individual product information |
| `verifyTitle.cy.js` | Tests sweets page title |
| `verifyTotalProducts.cy.js` | Verifies product count accuracy |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Bratiosha/SweetShop.git
cd SweetShop
```

2. **Install dependencies**
```bash
npm install
```

3. **Verify Cypress installation**
```bash
npx cypress verify
```

Expected output:
```
✔  Verified Cypress! /path/to/cypress
```

## 🧪 Running Tests

### Interactive Mode (Cypress Test Runner)

Open the Cypress Test Runner for interactive test execution with real-time browser preview:
```bash
npx cypress open
```

This will:
- Launch the Cypress Test Runner GUI
- Allow you to select and run individual tests
- Provide real-time test execution feedback
- Enable debugging capabilities

### Headless Mode (CI/CD Ready)

Run all tests in headless mode (no GUI):
```bash
npx cypress run
```

### Run Specific Test Suite

Execute tests from a specific category:
```bash
# Run only login tests
npx cypress run --spec "cypress/e2e/login/**/*.cy.js"

# Run only checkout tests
npx cypress run --spec "cypress/e2e/checkout/**/*.cy.js"

# Run only navigation tests
npx cypress run --spec "cypress/e2e/navigation/**/*.cy.js"

# Run only cart tests
npx cypress run --spec "cypress/e2e/cart/**/*.cy.js"

# Run only main page tests
npx cypress run --spec "cypress/e2e/mainPage/**/*.cy.js"
```

### Run Single Test File
```bash
npx cypress run --spec "cypress/e2e/login/positiveValidData.cy.js"
```

### Run Tests in Specific Browser
```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge

# Electron (default)
npx cypress run --browser electron
```

### Run Tests with Headed Mode

See the browser while tests run:
```bash
npx cypress run --headed
```

### Advanced Test Execution
```bash
# Run tests with specific viewport
npx cypress run --config viewportWidth=1920,viewportHeight=1080

# Run tests and record video
npx cypress run --config video=true

# Run tests without video recording (faster)
npx cypress run --config video=false

# Run with specific timeout
npx cypress run --config defaultCommandTimeout=10000
```

## 📦 Dependencies
```json
{
  "name": "cypress-demo",
  "version": "1.0.0",
  "description": "E2E Testing Suite for Sweet Shop",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["cypress", "e2e", "testing", "automation"],
  "author": "Bratiosha",
  "license": "ISC",
  "devDependencies": {
    "cypress": "^15.6.0"
  }
}
```

### Recommended npm Scripts

Add these scripts to your `package.json` for easier test execution:
```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:chrome": "cypress run --browser chrome",
    "test:firefox": "cypress run --browser firefox",
    "test:headed": "cypress run --headed",
    "test:login": "cypress run --spec 'cypress/e2e/login/**/*.cy.js'",
    "test:checkout": "cypress run --spec 'cypress/e2e/checkout/**/*.cy.js'",
    "test:cart": "cypress run --spec 'cypress/e2e/cart/**/*.cy.js'",
    "test:navigation": "cypress run --spec 'cypress/e2e/navigation/**/*.cy.js'",
    "test:ci": "cypress run --browser chrome --headless"
  }
}
```

Then run with:
```bash
npm run test:open
npm run test:login
npm run test:checkout
```

## 🔧 Configuration

### Cypress Configuration (`cypress.config.js`)
```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://sweetshop.netlify.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000
  },
});
```

### Environment Configuration (Optional)

Create `cypress.env.json` for environment-specific variables:
```json
{
  "baseUrl": "https://sweetshop.netlify.app",
  "testUser": {
    "email": "test@example.com",
    "password": "testpassword123"
  }
}
```

## 📸 Test Artifacts

### Screenshots

Automatically captured on test failures:
- **Location:** `cypress/screenshots/`
- **Format:** PNG
- **Naming:** `[test-suite]/[test-name] (failed).png`

### Videos

Recorded for all test runs:
- **Location:** `cypress/videos/`
- **Format:** MP4
- **Content:** Complete test execution recording

### Viewing Artifacts
```bash
# Open screenshots folder
open cypress/screenshots

# Open videos folder
open cypress/videos

# On Windows
start cypress/screenshots
start cypress/videos
```

## 🐛 Debugging

### Common Debugging Techniques

1. **Use Cypress debugger**
```javascript
cy.get('.element').debug()
cy.pause() // Pause test execution
```

2. **Check browser console**
```javascript
cy.window().then((win) => {
  console.log(win.document)
})
```

3. **Add custom logging**
```javascript
cy.log('Custom debug message')
```

4. **Use .then() for inspection**
```javascript
cy.get('.element').then(($el) => {
  console.log($el)
  debugger
})
```

### Running Tests in Debug Mode
```bash
# Open DevTools automatically
npx cypress open --browser chrome --config chromeWebSecurity=false
```

## 🔍 Best Practices Implemented

✅ **Modular Test Organization** - Tests separated by feature/page
✅ **Clear Naming Conventions** - Descriptive test file names
✅ **Comprehensive Coverage** - 42 test files covering all major features
✅ **Positive & Negative Testing** - Both happy and error paths tested
✅ **Isolated Test Cases** - Each test runs independently
✅ **Automated Screenshots** - Visual evidence on failures
✅ **Video Recording** - Complete test execution documentation

## 🚨 Troubleshooting

### Issue: Tests Timeout

**Solution:**
```javascript
// In cypress.config.js
defaultCommandTimeout: 15000,
pageLoadTimeout: 60000
```

### Issue: Element Not Found

**Solution:**
```javascript
// Use proper waiting
cy.get('.element', { timeout: 10000 }).should('exist')
```

### Issue: Flaky Tests

**Solution:**
```javascript
// Add explicit waits
cy.wait(500)
cy.intercept('GET', '/api/**').as('apiCall')
cy.wait('@apiCall')
```

### Issue: Video Recording Fails

**Solution:**
```bash
# Clear Cypress cache
npx cypress cache clear
npx cypress install
```

## 📊 Test Coverage Matrix

| Feature | Coverage | Tests |
|---------|----------|-------|
| Login | 🟢 Complete | 10 |
| Cart Management | 🟢 Complete | 7 |
| Checkout | 🟢 Complete | 5 |
| Navigation | 🟢 Complete | 5 |
| Main Page | 🟢 Complete | 4 |
| Sweets Page | 🟢 Complete | 3 |
| About Page | 🟢 Complete | 3 |
| Basket | 🟢 Complete | 2 |
| Account | 🟢 Complete | 2 |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Message Guidelines
```
feat: Add new test for product filtering
fix: Fix login test timeout issue
docs: Update README with new examples
test: Add checkout validation tests
refactor: Reorganize cart test structure
```

## 📝 To-Do / Future Enhancements

- [ ] Add GitHub Actions CI/CD pipeline
- [ ] Implement Cypress Dashboard integration
- [ ] Add API testing suite
- [ ] Create custom Cypress commands library
- [ ] Add Mochawesome reporter for HTML reports
- [ ] Implement parallel test execution
- [ ] Add visual regression testing
- [ ] Create test data factories
- [ ] Add accessibility testing

## 📞 Support & Contact

- **Repository:** [https://github.com/Bratiosha/SweetShop](https://github.com/Bratiosha/SweetShop)
- **Maintainer:** Bratiosha
- **Issues:** [Report a bug](https://github.com/Bratiosha/SweetShop/issues)

## 📄 License

This project is licensed under the ISC License.

## 🔗 Useful Links

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Sweet Shop Website](https://sweetshop.netlify.app)
- [Cypress GitHub](https://github.com/cypress-io/cypress)

## 📚 Additional Resources

- [Writing Your First Test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
- [Cypress API Documentation](https://docs.cypress.io/api/table-of-contents)
- [Custom Commands Guide](https://docs.cypress.io/api/cypress-api/custom-commands)

---

**Version:** 1.0.0  
**Last Updated:** November 2024  
**Node.js:** 22.18.0  
**Cypress:** 15.6.0  
**Maintained by:** Bratiosha

---

Made with ❤️ using Cypress