# 🍬 Sweet Shop - Cypress Testing Suite

[![Cypress](https://img.shields.io/badge/Cypress-15.6.0-17202C?style=flat-square&logo=cypress)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/Node.js-22.18.0-339933?style=flat-square&logo=node.js)](https://nodejs.org/)

Automated E2E testing suite for [Sweet Shop](https://sweetshop.netlify.app) e-commerce website.

## 📊 Overview

- **42 Test Files** organized by feature
- **100% Coverage** of critical user flows
- **6 Known Bugs** documented in [BUGS.md](BUGS.md)

## 🗂️ Project Structure
```
cypress/e2e/
├── login/          (10 tests) - Authentication
├── cart/           (7 tests)  - Cart management
├── checkout/       (5 tests)  - Checkout process
├── navigation/     (5 tests)  - Page navigation
├── mainPage/       (4 tests)  - Homepage
├── sweets/         (3 tests)  - Product catalog
├── about/          (3 tests)  - About page
├── basket/         (2 tests)  - Basket access
└── account/        (2 tests)  - Account verification
```

## 🚀 Quick Start

### Installation
```bash
git clone https://github.com/Bratiosha/SweetShop.git
cd SweetShop
npm install
```

### Run Tests
```bash
# Open Cypress Test Runner
npx cypress open

# Run all tests (headless)
npx cypress run

# Run specific suite
npx cypress run --spec "cypress/e2e/login/**/*.cy.js"
```

## 📦 Useful Commands
```bash
# Different browsers
npx cypress run --browser chrome
npx cypress run --browser firefox

# With video
npx cypress run --headed

# Faster (no video)
npx cypress run --config video=false
```

## 🧪 Test Categories

| Category | Tests | Description |
|----------|-------|-------------|
| 🔐 Login | 10 | Authentication & validation |
| 🛍️ Cart | 7 | Cart management & delivery |
| 💳 Checkout | 5 | Payment & order completion |
| 🧭 Navigation | 5 | Inter-page navigation |
| 🏠 Main Page | 4 | Homepage elements |
| 🍭 Sweets | 3 | Product catalog |
| ℹ️ About | 3 | About page |
| 🛒 Basket | 2 | Basket accessibility |
| 👤 Account | 2 | Account verification |

## 🐛 Known Issues

See [BUGS.md](BUGS.md) for detailed bug reports.

**Critical Bugs:**
- Incorrect email displayed after login
- Shipping price shows £11.99 instead of £1.99
- Shipping price displays NaN

**Other Issues:**
- Broken navigation: Basket → About
- Product name typo in checkout
- Missing Wham Bars image

## 🔧 Configuration
```javascript
// cypress.config.js
{
  baseUrl: 'https://sweetshop.netlify.app',
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true
}
```

## 📸 Test Artifacts

- **Screenshots:** `cypress/screenshots/` (on failures)
- **Videos:** `cypress/videos/` (all runs)

## 🤝 Contributing

1. Fork the repo
2. Create branch: `git checkout -b feature/new-test`
3. Commit: `git commit -m 'Add new test'`
4. Push: `git push origin feature/new-test`
5. Open Pull Request

## 📄 License

ISC License - See LICENSE file

## 📞 Contact

- **Author:** [Bratiosha](https://github.com/Bratiosha)
- **Repository:** [github.com/Bratiosha/SweetShop](https://github.com/Bratiosha/SweetShop)
- **Issues:** [Report Bug](https://github.com/Bratiosha/SweetShop/issues)

---

**Made with ❤️ using Cypress** | Version 1.0.0 | Last Updated: November 2025