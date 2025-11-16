1️⃣ Home / Main Page

Focus: Tests related to the main landing page.

Examples:

TC_1.1 Verify the header and navigation links are visible

TC_1.2 Verify welcome text is visible

TC_1.3 Verify 'Browse Sweets' button navigates correctly

TC_1.4 Verify popular sweets are displayed correctly

2️⃣ Navigation

Focus: Tests that check page-to-page navigation.

Organize by starting page, then destination page.

Examples:

Navigation from Main Page

Verify "Sweets" page loads correctly

Verify "About" page loads correctly

Verify "Login" page loads correctly

Verify "Basket" page loads correctly

Navigation from Sweets Page … same idea

This is better than numbering TS_2.1 → TS_2.20; grouping by start page makes it readable.

3️⃣ Login Page

Focus: Tests specific to the login page and functionality.

Examples:

Verify page title and description

Verify input fields (email, password)

Verify login button exists

Positive login with valid data

Negative login scenarios (empty fields, invalid email)

4️⃣ About Page

Focus: Content validation for About page

Examples:

Verify title, description, banner

Verify banner matches the year 2018

5️⃣ Sweets Page / Product Listings

Focus: Product listing, display, and “Add to Basket” elements

Examples:

Verify page title

Verify products have name, price, image, Add to Basket button

6️⃣ Basket / Cart

Focus: Cart functionality and calculations

Examples:

Verify product details, quantity, total price

Verify delivery options (Collect/Free, Standard shipping)

Remove item / empty basket / cancel confirmation

7️⃣ Account / User Profile

Focus: Logged-in user behavior

Examples:

Positive login and verify account page

Displayed email matches login

8️⃣ Checkout Process

Focus: Checkout flow

Split into:

Checkout Page Load → verify page accessibility and basket items

Completing Checkout → enter payment/shipping, add shipping costs, verify success