const { test, expect } = require('@playwright/test');

test.skip('test3 - example test in a different file', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page.getByRole('heading')).toContainText('Sign in');
    await expect(page.getByRole('paragraph')).toContainText('Need an account?');
});
