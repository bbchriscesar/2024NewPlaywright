const { test, expect } = require('@playwright/test');

test.describe('Responsive Testing', () => {
  test('iPhone 12 Viewport', async ({ page }) => {
    // Set iPhone 12 viewport size
    await page.setViewportSize({ width: 390, height: 844 });

    const url = 'https://www.google.com'; 

    await page.goto(url);

    await page.screenshot({ path: 'iphone_view.png' });
    const title = await page.title();
    expect(title).toContain('Google');
  });

  test('Samsung Galaxy S22 Viewport', async ({ page }) => {
    // Set Samsung Galaxy S22 viewport size
    await page.setViewportSize({ width: 736, height: 1608 });

    const url = 'https://www.google.com';

    await page.goto(url);

    await page.screenshot({ path: 'samsung_view.png' });
    const title = await page.title();
    expect(title).toContain('Google');
  });
});
