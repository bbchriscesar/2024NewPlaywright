import { test, expect } from '@playwright/test';

test.describe('My Tagged Tests', () => {

  test('test 1', {
    tag: '@nbafinals',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test('test 2', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test('test 3', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test('test 4', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

  test('test 5', {
    tag: '@chris',
  }, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('app-layout-header')).toContainText('Home');
    await expect(page.locator('app-layout-header')).toContainText('Sign in');
    await expect(page.locator('app-layout-header')).toContainText('Sign up');
  });

});



//https://playwright.dev/docs/test-configuration