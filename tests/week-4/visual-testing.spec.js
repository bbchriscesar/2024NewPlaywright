import { test, expect } from '@playwright/test';

test('Sign in Screenshot Comparison', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await expect(page.locator('div').filter({ hasText: 'conduitA place to learn and' }).nth(1)).toBeVisible();
  await page.waitForTimeout(1000); // Optional wait for initial page load
  await expect(page).toHaveScreenshot('conduit_home.png'); // Baseline screenshot

  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByPlaceholder('Email')).toBeVisible();
  await page.waitForTimeout(1000); // Optional wait for initial page load
  await expect(page).toHaveScreenshot('conduit_signin.png');
});
