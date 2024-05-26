const { test, expect } = require('@playwright/test');

test('should navigate to Wikipedia, switch to English and search for Playwright', async ({ page }) => {
  
    await page.goto('https://www.wikipedia.org/');

    expect(page.getByText('Wikipedia', { exact: true })).toBeVisible();

    await page.getByRole('link', { name: 'English 6,796,000+ articles' }).click();

    await page.getByPlaceholder('Search Wikipedia').click();

    await page.getByPlaceholder('Search Wikipedia').fill('Playwright');

    await page.getByPlaceholder('Search Wikipedia').press('Enter');

    await page.waitForTimeout(2000);
  });