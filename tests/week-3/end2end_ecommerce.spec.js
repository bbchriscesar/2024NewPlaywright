const { test, expect } = require('@playwright/test');

test('Purchase a product successfully', async ({ page }) => {
  // Locators
  const emailInput = page.getByPlaceholder('email@example.com');
  const passwordInput = page.getByPlaceholder('enter your passsword');
  const loginButton = page.getByRole('button', { name: 'Login' });
  const productNames = page.locator('h5 b');
  const addToCartButton = page.locator('button.btn.w-10.rounded');
  const cartButton = page.getByRole('button', { name: ' Cart' });
  const checkoutButton = page.getByRole('button', { name: 'Checkout❯' });
  const selectCountryInput = page.getByPlaceholder('Select Country');
  const countryResult = page.getByRole('button', { name: ' Philippines' });
  const cvvCodeInput = page.locator('input[type="text"]').nth(1);
  const cardNameInput = page.locator('input[type="text"]').nth(2);
  const placeOrderButton = page.getByText('Place Order');
  const thankYouOrderMessage = page.locator('h1');

  // Test data
  const email = "cesar.christianne@gmail.com";
  const password = "NewApprentice";
  const targetProductName = "ADIDAS ORIGINAL";
  const country = "Philippines";
  const cvvCode = "4600";
  const cardName = "Michael Jordan";
  const expectedThankYouMessage = " Thankyou for the order. ";

  // Test steps
  await page.goto('https://rahulshettyacademy.com/client');
  await emailInput.fill(email);
  await passwordInput.fill(password);
  await loginButton.click();

  await page.waitForLoadState('networkidle');

  const productCount = await productNames.count();
  for (let i = 0; i < productCount; ++i) {
    if (await productNames.nth(i).textContent() === targetProductName) {
      await addToCartButton.nth(i).click();
      break;
    }
  }

  await cartButton.click();
  await checkoutButton.click();
  await selectCountryInput.type(country, { delay: 100 });
  await countryResult.click();
  await cvvCodeInput.fill(cvvCode);
  await cardNameInput.fill(cardName);
  await placeOrderButton.click();
  await expect(thankYouOrderMessage).toContainText(expectedThankYouMessage);
});
