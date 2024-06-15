const { test, expect } = require('@playwright/test');

test.describe('My tests', () => {

    test('parallel test 1 - example test in the same file', async ({ page }) => {
        await page.goto('https://conduit.bondaracademy.com/');
        await expect(page.locator('app-layout-header')).toContainText('Home');
        await expect(page.locator('app-layout-header')).toContainText('Sign in');
        await expect(page.locator('app-layout-header')).toContainText('Sign up');
    });

    test('parallel test 2 - example test in the same file', async ({ page }) => {
        await page.goto('https://conduit.bondaracademy.com/');
        await expect(page.locator('app-layout-header')).toContainText('Home');
        await expect(page.locator('app-layout-header')).toContainText('Sign in');
        await expect(page.locator('app-layout-header')).toContainText('Sign up');
    });

    test('parallel test 3 - example test in the same file', async ({ page }) => {
        await page.goto('https://conduit.bondaracademy.com/');
        await expect(page.locator('app-layout-header')).toContainText('Home');
        await expect(page.locator('app-layout-header')).toContainText('Sign in');
        await expect(page.locator('app-layout-header')).toContainText('Sign up');
    });

    test('parallel test 4 - example test in the same file', async ({ page }) => {
        await page.goto('https://conduit.bondaracademy.com/');
        await expect(page.locator('app-layout-header')).toContainText('Home');
        await expect(page.locator('app-layout-header')).toContainText('Sign in');
        await expect(page.locator('app-layout-header')).toContainText('Sign up');
    });

    test('parallel test 5 - example test in the same file', async ({ page }) => {
        await page.goto('https://conduit.bondaracademy.com/');
        await expect(page.locator('app-layout-header')).toContainText('Home');
        await expect(page.locator('app-layout-header')).toContainText('Sign in');
        await expect(page.locator('app-layout-header')).toContainText('Sign up');
    });
});