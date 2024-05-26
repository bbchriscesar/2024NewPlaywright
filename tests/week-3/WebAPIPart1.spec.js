const { test, expect, request } = require('@playwright/test');
let token;

test.beforeAll(async ({ request }) => {

    const loginEndpoint = 'https://rahulshettyacademy.com/api/ecom/auth/login';
    const loginPayload = {
        userEmail: 'cesar.christianne@gmail.com',
        userPassword: 'NewApprentice'
    };

    const response = await request.post(loginEndpoint, {
        data: loginPayload
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    const { token: authToken, userId, message } = responseBody;

    // Set the token to be used in subsequent requests
    token = authToken;

    console.log('Login Token:', token);
    console.log('UserID:', userId);
    console.log('Message:', message);
});

test('Purchase a product successfully', async ({ page }) => {
    // Locators
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
    const targetProductName = "ADIDAS ORIGINAL";
    const country = "Philippines";
    const cvvCode = "4600";
    const cardName = "Michael Jordan";
    const expectedThankYouMessage = " Thankyou for the order. ";

    // Test steps
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto('https://rahulshettyacademy.com/client');

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