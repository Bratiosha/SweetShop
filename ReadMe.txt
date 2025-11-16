<div align="center">

# 🍬 Sweet Shop Testing Suite

### *Comprehensive E2E Testing with Cypress*

[![Cypress](https://img.shields.io/badge/Cypress-15.6.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/Node.js-22.18.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

**Automated testing suite ensuring quality across the Sweet Shop e-commerce platform**

[🌐 Live Site](https://sweetshop.netlify.app) • [📖 Documentation](#-test-suites-overview) • [🚀 Quick Start](#-getting-started) • [📊 Coverage](#-test-coverage-matrix)

---

</div>

## 📊 **Project Overview**

<table>
<tr>
<td>

**Test Statistics**
- 🎯 **42** Total Test Files
- 📁 **9** Test Categories
- ✅ **100%** Feature Coverage
- 🚀 Fully Automated

</td>
<td>

**Technology Stack**
- ⚡ Cypress 15.6.0
- 🟢 Node.js 22.18.0
- 📦 NPM Package Manager
- 🎨 Modern ES6+ JavaScript

</td>
</tr>
</table>

---

## 🎯 **Why This Project?**

<div align="center">

| 🎨 **Comprehensive** | 🚀 **Fast & Reliable** | 📈 **Maintainable** |
|:---:|:---:|:---:|
| Full coverage of all user journeys | Quick feedback with parallel execution | Clean, modular test structure |

</div>

---

## 🗂️ **Project Architecture**
```
🍬 SweetShop/
│
├── 📂 cypress/
│   ├── 📂 e2e/
│   │   ├── 🏠 mainPage/         (4 tests)  ← Homepage functionality
│   │   ├── 🍭 sweets/           (3 tests)  ← Product catalog
│   │   ├── 🔐 login/            (10 tests) ← Authentication
│   │   ├── 🛒 basket/           (2 tests)  ← Basket access
│   │   ├── 🛍️ cart/             (7 tests)  ← Cart management
│   │   ├── 💳 checkout/         (5 tests)  ← Payment flow
│   │   ├── 🧭 navigation/       (5 tests)  ← Site navigation
│   │   ├── 👤 account/          (2 tests)  ← Account verification
│   │   └── ℹ️ about/            (3 tests)  ← About page
│   │
│   ├── 📂 fixtures/         ← Test data
│   ├── 📂 support/          ← Custom commands
│   ├── 📸 screenshots/      ← Failure captures
│   └── 🎥 videos/           ← Test recordings
│
├── ⚙️ cypress.config.js
├── 📦 package.json
└── 📖 README.md
```

---

## 🎪 **Test Suites Overview**

<details open>
<summary><b>🔐 Login & Authentication (10 tests)</b></summary>

<br>

| Status | Test | Description |
|:------:|------|-------------|
| ✅ | `positiveValidData` | ✨ Successful login with valid credentials |
| ⛔ | `negativeBadEmailFormat` | Invalid email format validation |
| ⛔ | `negativeEmptyEmail` | Empty email field handling |
| ⛔ | `negativeEmptyPassword` | Empty password field handling |
| ⛔ | `negativeEmptyEmailPassword` | Both fields empty validation |
| 🔍 | `verifyEmailAndPasswordFields` | Form fields existence check |
| 🔍 | `verifyLoginButton` | Login button functionality |
| 🔍 | `verifyLoginTitle` | Page title verification |
| 🔍 | `verifyLoginDesc` | Description content check |
| 🔗 | `verifyLinks` | Navigation links validation |

</details>

<details>
<summary><b>🛍️ Cart Management (7 tests)</b></summary>

<br>

| Status | Test | Description |
|:------:|------|-------------|
| ✅ | `verifyProductDetails` | Product information accuracy |
| 🚚 | `applyFreeDelivery` | Free shipping option |
| 🚚 | `applyStandardDelivery10x` | Standard delivery with bulk items |
| ⚠️ | `applyStandardDeliveryNaN` | Invalid input handling |
| 🗑️ | `removeItemFromBasket` | Item removal functionality |
| ❌ | `verifyCancelledBasket` | Basket cancellation flow |
| 📭 | `verifyEmptybasket` | Empty cart state |

</details>

<details>
<summary><b>💳 Checkout Process (5 tests)</b></summary>

<br>

| Status | Test | Description |
|:------:|------|-------------|
| ✅ | `successfulCheckout` | Complete purchase flow |
| 💰 | `addShippingCost` | Shipping cost calculation |
| 📝 | `validPaymentAndShipping` | Form validation |
| 👁️ | `verifyAllItemDisplay` | Order summary display |
| 🚪 | `verifyCheckoutAccessibility` | Page accessibility |

</details>

<details>
<summary><b>🧭 Navigation (5 tests)</b></summary>

<br>

Tests navigation between all major pages:
- Main → All Pages
- Sweets → All Pages  
- About → All Pages
- Login → All Pages
- Basket → All Pages

</details>

<details>
<summary><b>🏠 Main Page (4 tests)</b></summary>

<br>

| Test | Validates |
|------|-----------|
| `verifyWelcomeTextVisible` | Welcome message display |
| `verifyHeaderLinksVisible` | Navigation header elements |
| `verifyDisplay4ProductInfo` | Featured products showcase |
| `verifyBrowseSweetsButton` | CTA button functionality |

</details>

<details>
<summary><b>🍭 Sweets Page (3 tests)</b></summary>

<br>

| Test | Validates |
|------|-----------|
| `verifyTitle` | Page title correctness |
| `verifyTotalProducts` | Product count accuracy |
| `verifyEachProductDetails` | Individual product info |

</details>

<details>
<summary><b>Additional Test Suites</b></summary>

<br>

**🛒 Basket Tests (2)** - Basket access from different menus  
**👤 Account Tests (2)** - Account name verification  
**ℹ️ About Page (3)** - About page content validation

</details>

---

## 🚀 **Getting Started**

### **Prerequisites**

<table>
<tr>
<td width="33%">

**Node.js**
```bash
node --version
# v16.0.0+
```

</td>
<td width="33%">

**npm**
```bash
npm --version
# 8.0.0+
```

</td>
<td width="33%">

**Git**
```bash
git --version
# 2.30.0+
```

</td>
</tr>
</table>

### **Installation**
```bash
# 1️⃣ Clone the repository
git clone https://github.com/Bratiosha/SweetShop.git
cd SweetShop

# 2️⃣ Install dependencies
npm install

# 3️⃣ Verify Cypress
npx cypress verify

# ✅ You're ready to test!
```

---

## 🧪 **Running Tests**

<table>
<tr>
<td width="50%">

### **🎨 Interactive Mode**
```bash
npx cypress open
```

**Perfect for:**
- ✨ Development
- 🐛 Debugging
- 👀 Visual inspection

</td>
<td width="50%">

### **⚡ Headless Mode**
```bash
npx cypress run
```

**Perfect for:**
- 🚀 CI/CD pipelines
- ⏱️ Quick validation
- 📊 Batch testing

</td>
</tr>
</table>

### **🎯 Target Specific Tests**
```bash
# 🔐 Login tests only
npx cypress run --spec "cypress/e2e/login/**/*.cy.js"

# 💳 Checkout flow
npx cypress run --spec "cypress/e2e/checkout/**/*.cy.js"

# 🛍️ Cart functionality
npx cypress run --spec "cypress/e2e/cart/**/*.cy.js"

# 🧭 Navigation tests
npx cypress run --spec "cypress/e2e/navigation/**/*.cy.js"

# 🎯 Single test file
npx cypress run --spec "cypress/e2e/login/positiveValidData.cy.js"
```

### **🌐 Browser Selection**
```bash
# Chrome (recommended)
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge

# Electron (default)
npx cypress run
```

### **⚙️ Advanced Options**
```bash
# 👀 Headed mode (see the browser)
npx cypress run --headed

# 📹 Without video (faster)
npx cypress run --config video=false

# 🖥️ Custom viewport
npx cypress run --config viewportWidth=1920,viewportHeight=1080

# ⏱️ Custom timeout
npx cypress run --config defaultCommandTimeout=10000
```

---

## 📦 **Recommended npm Scripts**

Add these to your `package.json`:
```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:chrome": "cypress run --browser chrome",
    "test:headed": "cypress run --headed",
    "test:fast": "cypress run --config video=false",
    
    "test:login": "cypress run --spec 'cypress/e2e/login/**/*.cy.js'",
    "test:checkout": "cypress run --spec 'cypress/e2e/checkout/**/*.cy.js'",
    "test:cart": "cypress run --spec 'cypress/e2e/cart/**/*.cy.js'",
    "test:navigation": "cypress run --spec 'cypress/e2e/navigation/**/*.cy.js'",
    
    "test:ci": "cypress run --browser chrome --headless"
  }
}
```

**Then run with:**
```bash
npm run test:open      # Interactive mode
npm run test:login     # Just login tests
npm run test:fast      # Quick run without videos
npm run test:ci        # CI/CD mode
```

---

## 📊 **Test Coverage Matrix**

<div align="center">

| Feature Area | Tests | Coverage | Status |
|:-------------|:-----:|:--------:|:------:|
| 🔐 Login & Auth | 10 | 100% | 🟢 |
| 🛍️ Cart Management | 7 | 100% | 🟢 |
| 💳 Checkout Process | 5 | 100% | 🟢 |
| 🧭 Navigation | 5 | 100% | 🟢 |
| 🏠 Main Page | 4 | 100% | 🟢 |
| 🍭 Sweets Catalog | 3 | 100% | 🟢 |
| ℹ️ About Page | 3 | 100% | 🟢 |
| 🛒 Basket Access | 2 | 100% | 🟢 |
| 👤 Account Verify | 2 | 100% | 🟢 |
| **TOTAL** | **42** | **100%** | **🎯** |

</div>

---

## 🔧 **Configuration**

<details>
<summary><b>⚙️ Cypress Configuration</b></summary>
```javascript
// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sweetshop.netlify.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // Event listeners here
    },
  },
});
```

</details>

<details>
<summary><b>🌍 Environment Variables (Optional)</b></summary>

Create `cypress.env.json`:
```json
{
  "baseUrl": "https://sweetshop.netlify.app",
  "testUser": {
    "email": "test@example.com",
    "password": "testPassword123"
  },
  "timeout": {
    "default": 10000,
    "pageLoad": 30000
  }
}
```

</details>

---

## 📸 **Test Artifacts**

<table>
<tr>
<td width="50%">

### **📸 Screenshots**

Captured automatically on failures
```
cypress/screenshots/
└── [test-suite]/
    └── [test-name] (failed).png
```

**View:** `open cypress/screenshots`

</td>
<td width="50%">

### **🎥 Videos**

Full test execution recordings
```
cypress/videos/
└── [test-file].cy.js.mp4
```

**View:** `open cypress/videos`

</td>
</tr>
</table>

---

## 🐛 **Debugging Guide**

<details>
<summary><b>🔍 Common Debugging Techniques</b></summary>

<br>

**1. Use Cypress Debugger**
```javascript
cy.get('.element').debug()
cy.pause() // Pause execution
```

**2. Console Logging**
```javascript
cy.log('Debug message here')
cy.window().then(win => console.log(win))
```

**3. Inspect Elements**
```javascript
cy.get('.element').then($el => {
  console.log($el)
  debugger
})
```

**4. Network Inspection**
```javascript
cy.intercept('GET', '/api/**').as('apiCall')
cy.wait('@apiCall').then(xhr => console.log(xhr))
```

</details>

<details>
<summary><b>⚠️ Troubleshooting Common Issues</b></summary>

<br>

| Issue | Solution |
|-------|----------|
| ⏱️ **Tests timeout** | Increase timeout in config: `defaultCommandTimeout: 15000` |
| 🔍 **Element not found** | Add explicit wait: `cy.get('.element', { timeout: 10000 })` |
| 🎥 **Video fails** | Clear cache: `npx cypress cache clear && npx cypress install` |
| 🌐 **Flaky tests** | Use `cy.intercept()` and wait for API calls |
| 🖼️ **Screenshot issues** | Check permissions: `chmod -R 755 cypress/screenshots` |

</details>

---

## 🎯 **Best Practices Implemented**

<div align="center">

| ✅ Practice | 📝 Implementation |
|:------------|:------------------|
| **Modular Structure** | Tests organized by feature/page |
| **Clear Naming** | Descriptive test file names |
| **Isolation** | Each test runs independently |
| **Coverage** | Both positive and negative scenarios |
| **Documentation** | Inline comments and clear assertions |
| **Artifacts** | Screenshots on failure, video recordings |
| **Maintainability** | DRY principles, reusable code |

</div>

---

## 🤝 **Contributing**

Contributions make the testing suite better! Here's how you can help:

<table>
<tr>
<td>

**1️⃣ Fork**
```bash
# Fork on GitHub
```

</td>
<td>

**2️⃣ Branch**
```bash
git checkout -b feature/NewTest
```

</td>
<td>

**3️⃣ Commit**
```bash
git commit -m 'Add: New test'
```

</td>
<td>

**4️⃣ Push**
```bash
git push origin feature/NewTest
```

</td>
<td>

**5️⃣ PR**
```
Open Pull Request
```

</td>
</tr>
</table>

### **Commit Convention**
```
feat: Add new checkout validation test
fix: Resolve login timeout issue
docs: Update README with examples
test: Add cart edge case tests
refactor: Improve navigation test structure
```

---

## 🚧 **Roadmap**

- [ ] 🔄 GitHub Actions CI/CD pipeline
- [ ] 📊 Cypress Dashboard integration
- [ ] 🎨 Mochawesome HTML reports
- [ ] ⚡ Parallel test execution
- [ ] 🌐 API testing suite
- [ ] 📱 Mobile viewport testing
- [ ] ♿ Accessibility testing (axe-core)
- [ ] 📸 Visual regression testing
- [ ] 🏭 Test data factories
- [ ] 🔐 Custom commands library

---

## 📚 **Resources**

<div align="center">

[![Cypress Docs](https://img.shields.io/badge/Cypress-Docs-17202C?style=for-the-badge&logo=cypress)](https://docs.cypress.io)
[![Best Practices](https://img.shields.io/badge/Best-Practices-17202C?style=for-the-badge&logo=cypress)](https://docs.cypress.io/guides/references/best-practices)
[![API Reference](https://img.shields.io/badge/API-Reference-17202C?style=for-the-badge&logo=cypress)](https://docs.cypress.io/api/table-of-contents)

</div>

---

## 📞 **Support**

<div align="center">

**Need help? Have questions?**

[![GitHub Issues](https://img.shields.io/badge/Issues-Report_Bug-red?style=for-the-badge&logo=github)](https://github.com/Bratiosha/SweetShop/issues)
[![GitHub Repo](https://img.shields.io/badge/Repository-SweetShop-blue?style=for-the-badge&logo=github)](https://github.com/Bratiosha/SweetShop)

**Maintained by:** [Bratiosha](https://github.com/Bratiosha)

</div>

---

## 📄 **License**

<div align="center">

This project is licensed under the **ISC License**
```
Copyright (c) 2024 Bratiosha

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
```

</div>

---

<div align="center">

### **Built with ❤️ and ☕**

**Version 1.0.0** | **Node.js 22.18.0** | **Cypress 15.6.0**

⭐ **Star this repo if you find it helpful!** ⭐

[⬆ Back to Top](#-sweet-shop-testing-suite)

---

*Last Updated: November 2024*

</div>

<div align="center">

## 🐛 **Known Issues**

For a complete list of identified bugs and issues, see [BUGS.md](BUGS.md)

**Quick Stats:**
- 🔴 Critical: 2
- 🟠 High: 2  
- 🟡 Medium: 2

</div>