const { test, expect } = require('@playwright/test');

test.describe.parallel('My Tagged Tests', () => {

  test.skip('test 1', {
    tag: '@mavs',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test.skip('test 2', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test.skip('test 3', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test.skip('test 4', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test.skip('test 5', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

});
