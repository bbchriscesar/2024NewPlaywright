const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

test.skip('parallel test 1 - example test in the same file', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
});

test.skip('parallel test 2 - another test in the same file', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-home-page')).toContainText('Your Feed');
    await expect(page.locator('app-home-page')).toContainText('Global Feed');
    await expect(page.locator('app-home-page')).toContainText('Popular Tags');
});
